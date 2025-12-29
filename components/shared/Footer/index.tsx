import { AlertTriangle, CreditCard } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-white py-8 mt-16 border-t-4 border-yellow-500">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Main Warning */}
                    <div className="bg-yellow-500/10 border-2 border-yellow-500 rounded-lg p-6 mb-6">
                        <div className="flex items-start gap-3">
                            <AlertTriangle className="h-6 w-6 text-yellow-500 shrink-0 mt-1" />
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-yellow-500">
                                    ⚠️ IMPORTANTE - PROYECTO DE DEMOSTRACIÓN
                                </h3>
                                <p className="text-slate-200 font-semibold">
                                    Esta es una aplicación de práctica educativa. NO es un negocio real.
                                </p>
                                <p className="text-red-400 font-bold text-lg">
                                    🚫 NUNCA INGRESES DATOS REALES DE TARJETAS DE CRÉDITO
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Test Card Information */}
                    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                        <div className="flex items-start gap-3">
                            <CreditCard className="h-6 w-6 text-blue-400 shrink-0 mt-1" />
                            <div>
                                <h4 className="text-lg font-bold text-blue-400 mb-3">
                                    Tarjeta de Prueba para Simulación de Pagos
                                </h4>
                                <div className="space-y-2 text-slate-300">
                                    <p className="font-mono bg-slate-900 p-2 rounded">
                                        <span className="text-slate-400">Número:</span>{" "}
                                        <span className="text-green-400 font-semibold">4242 4242 4242 4242</span>
                                    </p>
                                    <p className="font-mono bg-slate-900 p-2 rounded">
                                        <span className="text-slate-400">Expiración:</span>{" "}
                                        <span className="text-green-400 font-semibold">12/28</span>
                                    </p>
                                    <p className="font-mono bg-slate-900 p-2 rounded">
                                        <span className="text-slate-400">CVV:</span>{" "}
                                        <span className="text-green-400 font-semibold">123</span>
                                    </p>
                                    <p className="text-sm text-slate-400 mt-3">
                                        * Aunque la pasarela de pagos (Stripe) es real, esta aplicación NO procesa pagos reales
                                        ni realiza envíos de productos/servicios.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="mt-6 pt-6 border-t border-slate-700 text-center">
                        <p className="text-slate-400 text-sm">
                            © {new Date().getFullYear()} TerraCars - Proyecto Educativo de Práctica
                        </p>
                        <p className="text-slate-500 text-xs mt-2">
                            Desarrollado con Next.js, TypeScript, Prisma, Stripe y Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
