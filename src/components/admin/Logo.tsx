import React from 'react'
import './admin.css'

export const Logo = () => (
  <div className="admin-logo" style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
    <span className="logo-text-primary" style={{ fontSize: '28px', fontWeight: 900, letterSpacing: '-0.5px' }}>
      CODE
    </span>
    <span style={{ color: '#d90a2c', fontSize: '28px', fontWeight: 900, letterSpacing: '-0.5px' }}>
      SMASH
    </span>
  </div>
)
