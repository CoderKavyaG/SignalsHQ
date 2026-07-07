import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  offsetX: number
  offsetY: number
  radius: number
  baseRadius: number
}

export function SignalField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000, active: false })
  const pulseRef = useRef({
    particleIndex: -1,
    startTime: 0,
    duration: 800,
  })

  // Set up mouse events
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true }
    }
    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000, active: false }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Set up randomized pulse timer
  useEffect(() => {
    // Check for prefers-reduced-motion first
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isReduced) return

    let timeoutId: number

    const triggerPulse = () => {
      if (particlesRef.current.length > 0) {
        pulseRef.current = {
          particleIndex: Math.floor(Math.random() * particlesRef.current.length),
          startTime: performance.now(),
          duration: 800,
        }
      }
      const nextDelay = 3000 + Math.random() * 2000 // 3-5 seconds
      timeoutId = window.setTimeout(triggerPulse, nextDelay)
    }

    const initialDelay = 3000 + Math.random() * 2000
    timeoutId = window.setTimeout(triggerPulse, initialDelay)

    return () => clearTimeout(timeoutId)
  }, [])

  // Canvas render loop
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Handle resizing
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      // Initialize particles if they haven't been initialized
      if (particlesRef.current.length === 0) {
        const count = 70
        const list: Particle[] = []
        for (let i = 0; i < count; i++) {
          const angle = Math.random() * Math.PI * 2
          const speed = 0.1 + Math.random() * 0.1 // 0.1 to 0.2 px/frame
          const radius = 1.5 + Math.random() * 0.5 // 1.5 to 2.0 px
          list.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            offsetX: 0,
            offsetY: 0,
            radius,
            baseRadius: radius,
          })
        }
        particlesRef.current = list
      }
    }

    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()

    const draw = () => {
      const w = canvas.width
      const h = canvas.height
      const now = performance.now()
      const pulse = pulseRef.current

      // Clear canvas
      ctx.clearRect(0, 0, w, h)

      const particles = particlesRef.current

      // 1. Update particle positions and mouse interaction
      particles.forEach((p) => {
        if (!isReduced) {
          // Normal base drift
          p.x += p.vx
          p.y += p.vy

          // Wrap edges
          if (p.x < 0) p.x = w
          if (p.x > w) p.x = 0
          if (p.y < 0) p.y = h
          if (p.y > h) p.y = 0
        }

        // Calculate active mouse influence
        let targetOffsetX = 0
        let targetOffsetY = 0

        if (mouseRef.current.active) {
          const dx = p.x - mouseRef.current.x
          const dy = p.y - mouseRef.current.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 120 && dist > 0) {
            // Easing factor (1 at cursor, 0 at 120px)
            const factor = 1 - dist / 120
            const disp = 8 * factor // max displacement 8px
            
            // Push away from cursor
            targetOffsetX = (dx / dist) * disp
            targetOffsetY = (dy / dist) * disp
          }
        }

        // Smoothly ease current offset to target offset
        if (!isReduced) {
          p.offsetX += (targetOffsetX - p.offsetX) * 0.08
          p.offsetY += (targetOffsetY - p.offsetY) * 0.08
        } else {
          p.offsetX = targetOffsetX
          p.offsetY = targetOffsetY
        }
      })

      // Calculate pulsing particle metrics
      let pulsingIdx = -1
      let pulseProgress = 0
      let ringRadius = 0
      let ringOpacity = 0

      if (!isReduced && pulse.particleIndex !== -1) {
        const elapsed = now - pulse.startTime
        if (elapsed < pulse.duration) {
          pulsingIdx = pulse.particleIndex
          pulseProgress = elapsed / pulse.duration // 0 to 1
          
          // Radar ring expands up to 40px, fades out
          ringRadius = pulseProgress * 40
          ringOpacity = 1 - pulseProgress
        }
      }

      // 2. Draw connections first (behind particles)
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i]
        const p1x = p1.x + p1.offsetX
        const p1y = p1.y + p1.offsetY

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const p2x = p2.x + p2.offsetX
          const p2y = p2.y + p2.offsetY

          const dx = p1x - p2x
          const dy = p1y - p2y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 140) {
            // Interpolate line opacity by distance: closer = more opaque, max 15% opacity
            const factor = 1 - dist / 140
            let maxOpacity = 0.15
            let strokeColor = '139, 92, 246' // brand-purple (RGB: 139, 92, 246)

            // If one of the connected particles is pulsing, boost connection opacity
            if (i === pulsingIdx || j === pulsingIdx) {
              // Fade in and out connection boost along with the pulse progress
              const boostOpacity = 0.35 * Math.sin(pulseProgress * Math.PI)
              maxOpacity += boostOpacity
            }

            ctx.beginPath()
            ctx.moveTo(p1x, p1y)
            ctx.lineTo(p2x, p2y)
            ctx.strokeStyle = `rgba(${strokeColor}, ${factor * maxOpacity})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      // 3. Draw particles
      particles.forEach((p, idx) => {
        const px = p.x + p.offsetX
        const py = p.y + p.offsetY

        ctx.beginPath()
        ctx.arc(px, py, p.radius, 0, Math.PI * 2)

        if (idx === pulsingIdx) {
          // Pulsing particle is glowing brand-pink (#EC4899) and scales up
          const scale = 1.8 - 0.8 * Math.sin(pulseProgress * Math.PI)
          p.radius = p.baseRadius * scale

          ctx.fillStyle = 'rgba(236, 72, 153, 0.9)' // bright brand-pink
          ctx.fill()

          // Draw the radar ping ring expanding from it
          ctx.beginPath()
          ctx.arc(px, py, ringRadius, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(236, 72, 153, ${ringOpacity * 0.5})`
          ctx.lineWidth = 1.5
          ctx.stroke()
        } else {
          // Reset size for non-pulsing particles
          p.radius = p.baseRadius
          ctx.fillStyle = 'rgba(85, 85, 94, 0.3)' // text-faint (#55555E) at 30%
          ctx.fill()
        }
      })

      if (!isReduced) {
        animationFrameId = requestAnimationFrame(draw)
      }
    }

    if (isReduced) {
      // Reduced motion: draw one static frame only
      draw()
    } else {
      draw()
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Heavily blurred radial gradient blob behind the canvas */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full blur-[140px] opacity-[0.10] pointer-events-none"
        style={{ background: 'var(--brand-gradient)' }}
      />
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full block"
      />
    </div>
  )
}
