'use client'

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table"; // Ensure this matches the filename
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"; // Match casing
import { Badge } from "@/components/ui/Badge"; // Match casing

interface Order {
  id: string;
  date: string; // Changed to string for formatted date
  total: number;
  status: 'Processing' | 'Shipped' | 'Delivered';
  items: string[];
}

const mockOrders: Order[] = [
  { id: '1', date: '2024-03-15', total: 150.00, status: 'Delivered', items: ['Organic Apples', 'Fresh Milk'] },
  { id: '2', date: '2024-03-20', total: 75.50, status: 'Shipped', items: ['Free-range Eggs', 'Whole Wheat Bread'] },
  { id: '3', date: '2024-03-25', total: 200.00, status: 'Processing', items: ['Grass-fed Beef', 'Organic Vegetables Mix'] },
]

export default function MyOrders() {
  const [orders] = useState<Order[]>(mockOrders);
  const [formattedOrders, setFormattedOrders] = useState<Order[]>([]);

  useEffect(() => {
    const updatedOrders = orders.map(order => ({
      ...order,
      date: new Date(order.date).toLocaleDateString(), // Format the date here
    }));
    setFormattedOrders(updatedOrders);
  }, [orders]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8" style={{ paddingTop: '170px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-playfair">My Orders</CardTitle>
              <CardDescription>View and track your recent orders</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {formattedOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>
                        <ul className="list-disc list-inside">
                          {order.items.map((item, index) => (
                            <li key={index} className="text-sm">{item}</li>
                          ))}
                        </ul>
                      </TableCell>
                      <TableCell>&#8377;{order.total.toFixed(2)}</TableCell>
                      <TableCell>
                        <Badge variant={
                          order.status === 'Delivered' ? 'success' :
                          order.status === 'Shipped' ? 'info' : 'warning'
                        }>
                          {order.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
