import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default async function Icon() {
  const fontData = fs.readFileSync(
    path.join(process.cwd(), 'public/fonts/ClashDisplay-Semibold.ttf')
  )

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: '#1e293b',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'ClashDisplay',
          letterSpacing: '-0.5px',
          borderRadius: '50%',
        }}
      >
        JS
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'ClashDisplay',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  )
}
