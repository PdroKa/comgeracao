import type { Metadata } from "next";

import { Suspense } from "react";
import Loading from "./loading";



export const metadata: Metadata = {
    title: "Ingressos Adorai Curitiba 2025 | Garanta sua vaga",
    description: "Garanta seu ingresso para o Adorai Curitiba 2025. Dois dias de avivamento, adoração e encontro com Deus em Curitiba."
};

// export default function Checkout() {
//     return (
//         <>
//             <Suspense fallback={<Loading />}>
//                 <div className="w-full h-screen max-w-4xl mx-auto aspect-[16/9] rounded-2xl shadow-2xl overflow-hidden">
//                    <h1>Checkout</h1>
//                 </div>
//             </Suspense>
//         </>
//     )
// }

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag, Truck, Shield, RotateCcw, Clock } from "lucide-react";
import Image from "next/image";

function ProductDetails() {
    return (
        <div className="flex flex-col space-y-6 bg-white p-6 rounded-lg">
            <div className="text-sm mb-6 bg-zinc-300">
                <h4>Meu ingresso</h4>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <img
                        src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80"
                        alt="T-Shirt"
                        className="w-full h-auto rounded-lg object-cover"
                    />
                </div>
                <div className="flex-1 space-y-4">
                    <h1 className="text-3xl font-bold">Premium Cotton T-Shirt</h1>
                    <p className="text-2xl font-semibold text-primary">$29.99</p>
                    <div className="space-y-2">
                        <p className="text-sm font-medium">Selected Size: Medium</p>
                        <p className="text-sm font-medium">Selected Color: Navy Blue</p>
                    </div>
                    <p className="text-gray-600">
                        Our premium cotton t-shirt offers unmatched comfort and durability.
                        Made from 100% organic cotton, this shirt features a modern fit,
                        reinforced seams, and maintains its shape after multiple washes.
                    </p>
                </div>
            </div>
        </div>
    );
};

const BenefitsSection = () => {

    return (
        <>
        </>
    );
};

function OrderSummary() {
    const subtotal = 29.99;
    const shipping = 0;
    const total = subtotal + shipping;

    return (
        <Card className="bg-gray-50">
            <CardContent className="p-6 space-y-6">
                <h2 className="text-xl font-bold">Order Summary</h2>

                <div className="space-y-3">
                    <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Shipping</span>
                        <span>VALOR</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                </div>

                <Button className="w-full py-6 text-lg" size="lg">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Buy Now
                </Button>

                <p className="text-xs text-center text-gray-500 mt-4">
                    Secure checkout powered by Stripe. Your payment information is
                    encrypted.
                </p>
            </CardContent>
        </Card>
    );
};

export default function Checkout() {
    return (
        <div className="min-h-screen bg-background">
            <header className="shadow-sm py-4">
                <div className="container mx-auto px-4">
                    <Image className="mx-auto block" width={65} height={65} src="/Logo-remove-240.png" alt="Logo, Adorai Curitiba" loading='lazy' />
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <ProductDetails />
                    </div>
                    <div className="lg:col-span-1">
                        <OrderSummary />
                    </div>
                </div>
            </main>


        </div>
    );
}
