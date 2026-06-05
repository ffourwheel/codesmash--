import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise })
    
    // Find any user
    const users = await payload.find({
      collection: 'users',
      limit: 1
    })

    if (users.docs.length > 0) {
      const adminUser = users.docs[0]
      await payload.update({
        collection: 'users',
        id: adminUser.id,
        data: {
          password: 'password123'
        }
      })
      return NextResponse.json({ 
        success: true, 
        message: `รีเซ็ตรหัสผ่านสำเร็จ!`,
        email: adminUser.email,
        newPassword: 'password123'
      })
    } else {
      // Create a new admin
      const newUser = await payload.create({
        collection: 'users',
        data: {
          email: 'admin@codesmash.com',
          password: 'password123',
          name: 'Admin',
          role: 'admin'
        }
      })
      return NextResponse.json({ 
        success: true, 
        message: `ไม่พบผู้ใช้ในระบบ จึงสร้าง Admin ใหม่ให้สำเร็จ!`,
        email: 'admin@codesmash.com',
        newPassword: 'password123'
      })
    }
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
