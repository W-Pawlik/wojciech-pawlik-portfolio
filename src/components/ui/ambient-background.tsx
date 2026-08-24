'use client'

import { useEffect, useRef } from 'react'

import { useReducedMotion } from '@/hooks/use-reduced-motion'

const VERTEX_SHADER = `
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const FRAGMENT_SHADER = `
precision highp float;
varying vec2 vUv;
uniform vec2 u_resolution;
uniform float u_time;
uniform float u_grain;
uniform vec3 u_bg;
uniform vec3 u_warm;
uniform vec3 u_dark;
uniform vec3 u_neutral;

vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.2113248654, 0.3660254038, -0.5773502692, 0.0243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = x0.x > x0.y ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.7928429 - 0.8537347 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  float ratio = u_resolution.x / u_resolution.y;
  vec2 p = vUv - 0.5;
  p.x *= ratio;
  float t = u_time * 0.18;
  float noise = snoise(p * 1.5 + vec2(t * 0.32, -t * 0.24));
  vec2 warmCenter = vec2(ratio * 0.33 + sin(t * 0.32) * 0.1, 0.02 + cos(t * 0.24) * 0.08);
  vec2 darkCenter = vec2(ratio * 0.26 + cos(t * 0.22) * 0.12, -0.42 + sin(t * 0.18) * 0.08);
  vec2 neutralCenter = vec2(-ratio * 0.1 + sin(t * 0.16) * 0.12, -0.52 + cos(t * 0.2) * 0.06);
  float warm = smoothstep(0.74, 0.0, length(p - warmCenter)) * (0.1 + noise * 0.025);
  float dark = smoothstep(0.66, 0.0, length(p - darkCenter)) * 0.075;
  float neutral = smoothstep(0.72, 0.0, length(p - neutralCenter)) * 0.11;
  vec3 color = u_bg;
  color = mix(color, u_warm, max(warm, 0.0));
  color = mix(color, u_dark, max(dark, 0.0));
  color = mix(color, u_neutral, max(neutral, 0.0));
  float grain = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453 + u_time * 0.07);
  color += (grain - 0.5) * u_grain;
  gl_FragColor = vec4(color, 1.0);
}
`

type AmbientBackgroundProps = {
  className?: string
}

type Rgb = [number, number, number]

const FALLBACK_RGB: Rgb = [0.95, 0.94, 0.91]

function parseColor(value: string): Rgb {
  const hex = value.trim().match(/^#([\da-f]{6})$/i)?.[1]
  if (hex) {
    return [
      Number.parseInt(hex.slice(0, 2), 16) / 255,
      Number.parseInt(hex.slice(2, 4), 16) / 255,
      Number.parseInt(hex.slice(4, 6), 16) / 255,
    ]
  }

  const channels = value
    .match(/[\d.]+/g)
    ?.slice(0, 3)
    .map(Number)
  if (channels?.length === 3) {
    const [red, green, blue] = channels
    if (red !== undefined && green !== undefined && blue !== undefined) {
      return [red / 255, green / 255, blue / 255]
    }
  }
  return FALLBACK_RGB
}

function createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader)
    return null
  }
  return shader
}

export function AmbientBackground({ className }: AmbientBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const gl = canvas.getContext('webgl', { alpha: false, antialias: false })
    if (!gl) return
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER)
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER)
    if (!vertexShader || !fragmentShader) return
    const program = gl.createProgram()
    const buffer = gl.createBuffer()
    if (!program || !buffer) return

    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return
    gl.useProgram(program)
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)

    const position = gl.getAttribLocation(program, 'position')
    gl.enableVertexAttribArray(position)
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)
    const resolution = gl.getUniformLocation(program, 'u_resolution')
    const time = gl.getUniformLocation(program, 'u_time')
    const grain = gl.getUniformLocation(program, 'u_grain')
    const bg = gl.getUniformLocation(program, 'u_bg')
    const warm = gl.getUniformLocation(program, 'u_warm')
    const dark = gl.getUniformLocation(program, 'u_dark')
    const neutral = gl.getUniformLocation(program, 'u_neutral')
    const styles = getComputedStyle(container)
    const colors = {
      bg: parseColor(styles.getPropertyValue('--color-canvas')),
      warm: parseColor(styles.getPropertyValue('--color-accent')),
      dark: parseColor(styles.getPropertyValue('--color-content')),
      neutral: parseColor(styles.getPropertyValue('--color-canvas-deep')),
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2)
      canvas.width = Math.max(1, Math.floor(container.clientWidth * dpr))
      canvas.height = Math.max(1, Math.floor(container.clientHeight * dpr))
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    let animationFrame = 0
    const render = (timestamp: number) => {
      gl.uniform2f(resolution, canvas.width, canvas.height)
      gl.uniform1f(time, reducedMotion ? 0 : timestamp * 0.001)
      gl.uniform1f(grain, 0.012)
      gl.uniform3fv(bg, colors.bg)
      gl.uniform3fv(warm, colors.warm)
      gl.uniform3fv(dark, colors.dark)
      gl.uniform3fv(neutral, colors.neutral)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      if (!reducedMotion) animationFrame = requestAnimationFrame(render)
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(container)
    resize()
    animationFrame = requestAnimationFrame(render)
    return () => {
      resizeObserver.disconnect()
      cancelAnimationFrame(animationFrame)
      gl.deleteBuffer(buffer)
      gl.deleteProgram(program)
      gl.deleteShader(vertexShader)
      gl.deleteShader(fragmentShader)
    }
  }, [reducedMotion])

  return (
    <div ref={containerRef} aria-hidden="true" className={className}>
      <canvas ref={canvasRef} className="ambient-background__canvas" />
      <span className="ambient-background__glow ambient-background__glow--warm" />
      <span className="ambient-background__glow ambient-background__glow--dark" />
      <span className="ambient-background__glow ambient-background__glow--neutral" />
      <span className="ambient-background__grain" />
    </div>
  )
}
