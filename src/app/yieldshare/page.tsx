'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { Textarea } from "@/components/ui/Textarea";
import { Select, SelectItem, SelectValue } from "@/components/ui/Select";

export default function YieldShare() {
  const [utilsNeeded, setUtilsNeeded] = useState('');
  const [goodsOffered, setGoodsOffered] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('YieldShare request submitted', { utilsNeeded, goodsOffered, quantity, unit });
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8" style={{ paddingTop: '170px' }}> {/* Adjust padding here */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-playfair font-bold mb-8 text-center">YieldShare</h1>
          <p className="text-center mb-8 font-lora">Exchange utilities for your agricultural goods with other farmers.</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="utils">Utilities Needed</Label>
              <Textarea
                id="utils"
                placeholder="Describe the utilities you need (e.g., tractor, irrigation system)"
                value={utilsNeeded}
                onChange={(e) => setUtilsNeeded(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="goods">Goods Offered</Label>
              <Input
                id="goods"
                type="text"
                placeholder="What goods can you offer in exchange?"
                value={goodsOffered}
                onChange={(e) => setGoodsOffered(e.target.value)}
              />
            </div>
            <div className="flex space-x-4">
              <div className="flex-1 space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input
                  id="quantity"
                  type="number"
                  placeholder="Amount of goods"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="flex-1 space-y-2">
                <Label htmlFor="unit">Unit</Label>
                <Select value={unit} onValueChange={setUnit}>
                  <SelectValue placeholder="Select unit" />
                  <SelectItem value="kg">Kilograms (kg)</SelectItem>
                  <SelectItem value="ton">Tons</SelectItem>
                  <SelectItem value="liter">Liters</SelectItem>
                  <SelectItem value="piece">Pieces</SelectItem>
                </Select>
              </div>
            </div>
            <Button type="submit" className="w-full">Submit YieldShare Request</Button>
          </form>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
