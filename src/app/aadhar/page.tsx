'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"
import { Label } from "@/components/ui/Label"
import { Card, CardContent, CardHeader, CardTitle, } from "@/components/ui/Card"

export default function AadharAuth() {
  const [aadharNo, setAadharNo] = useState('')
  const [otp, setOtp] = useState('')
  const [otpSent, setOtpSent] = useState(false)

  const handleSendOtp = () => {
    // Here you would implement the logic to send OTP
    console.log('Sending OTP for Aadhar', aadharNo)
    setOtpSent(true)
  }

  const handleVerify = () => {
    // Here you would implement the verification logic
    console.log('Verifying OTP', otp)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8" style={{ paddingTop: '170px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-playfair text-center">Aadhar Authentication</CardTitle>

            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="aadhar">Aadhar Number</Label>
                  <Input
                    id="aadhar"
                    type="text"
                    placeholder="Enter your 12-digit Aadhar number"
                    value={aadharNo}
                    onChange={(e) => setAadharNo(e.target.value)}
                    maxLength={12}
                  />
                </div>
                {!otpSent ? (
                  <Button className="w-full" onClick={handleSendOtp}>Send OTP to Linked Mobile</Button>
                ) : (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="otp">OTP</Label>
                      <Input
                        id="otp"
                        type="text"
                        placeholder="Enter the OTP sent to your linked mobile"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        maxLength={6}
                      />
                    </div>
                    <Button className="w-full" onClick={handleVerify}>Verify OTP</Button>
                  </>
                )}
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}