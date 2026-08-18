"use client";

import { useState } from "react";
import { Button, Input, useToast } from "@nhonguista/ui";
import { isValidName, isValidMozambicanPhone } from "moz-utils";

export function ContactForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState({ name: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const newErrors = { name: "", phone: "", message: "" };
    let hasError = false;

    if (!formData.name) {
      newErrors.name = "O nome é obrigatório.";
      hasError = true;
    } else if (!isValidName(formData.name)) {
      newErrors.name = "Por favor, insira um nome válido (apenas letras).";
      hasError = true;
    }

    if (!formData.phone) {
      newErrors.phone = "O número de telefone é obrigatório.";
      hasError = true;
    } else if (!isValidMozambicanPhone(formData.phone)) {
      newErrors.phone = "Insira um número moçambicano válido (ex: 84XXXXXXX).";
      hasError = true;
    }

    if (!formData.message || formData.message.length < 10) {
      newErrors.message = "A mensagem deve ter pelo menos 10 caracteres.";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    // Simulate submission
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      
      toast({
        title: "Mensagem enviada!",
        description: "Recebemos o seu contacto. Responderemos em breve.",
        variant: "success"
      });

      setFormData({ name: "", phone: "", message: "" });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-black p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
          Nome Completo
        </label>
        <Input 
          id="name"
          name="name" 
          placeholder="Ex: Edmilson Muacigarro" 
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? "border-red-500" : ""}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
          Telemóvel (Moçambique)
        </label>
        <Input 
          id="phone"
          name="phone" 
          type="tel"
          placeholder="Ex: 841234567" 
          value={formData.phone}
          onChange={handleChange}
          className={errors.phone ? "border-red-500" : ""}
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
          Mensagem
        </label>
        <textarea 
          id="message"
          name="message"
          rows={4}
          placeholder="Como podemos ajudar?"
          value={formData.message}
          onChange={handleChange}
          className={`flex w-full rounded-md border border-zinc-200 dark:border-zinc-800 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-950 ${errors.message ? "border-red-500" : ""}`}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full h-12 text-md">
        {isSubmitting ? "A enviar..." : "Enviar Mensagem"}
      </Button>
    </form>
  );
}
