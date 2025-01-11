"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "./ui/form";
import Image from "next/image";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Home, Mail, Tablet } from "lucide-react";

const formSchema = z.object({
    email: z.string().min(2).max(50),
    message: z.string().min(2).max(50),
    name: z.string().min(2).max(50),
    subject: z.string().min(2).max(50),
})

export default function ContactForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const t = useTranslations('form');

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            message: "",
            name: "",
            subject: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true);
        setErrorMessage("");

        try {
            // Do something with the form values
        } catch (error) {
            setErrorMessage("Failed to create account. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex flex-col lg:flex-row items-start gap-32">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full lg:w-5/6 flex flex-col gap-6">
                    {/* Textarea */}
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea
                                        rows={8}
                                        placeholder={t('msg')}
                                        className="shad_textArea"
                                        disabled={isLoading}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-red-500" />
                            </FormItem>
                        )}
                    />

                    <div className="w-full flex items-center gap-6">
                        {/* Name Input */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="w-1/2">
                                    <FormControl>
                                        <Input
                                            placeholder={t('name')}
                                            className="shad_input"
                                            disabled={isLoading}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-500" />
                                </FormItem>
                            )}
                        />

                        {/* Email Input */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="w-1/2">
                                    <FormControl>
                                        <Input
                                            placeholder={t('email')}
                                            className="shad_input"
                                            disabled={isLoading}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-500" />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Subject Input */}
                    <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder={t('subject')}
                                        className="shad_input"
                                        disabled={isLoading}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-red-500" />
                            </FormItem>
                        )}
                    />

                    <button
                        disabled={isLoading}
                        type="submit"
                        className="w-fit text-pink md:py-3 py-1 md:px-9 px-6 border border-pink uppercase hover:bg-pink transition-all duration-300 hover:text-white"
                    >
                        {t('text1')}
                        {isLoading && (
                            <Image
                                src="icons/loader.svg"
                                width={24}
                                height={24}
                                alt="loader"
                                className="ml-2 animate-spin"
                            />
                        )}
                    </button>

                    {errorMessage && <p className="error-message">*{errorMessage}</p>}
                </form>
            </Form>

            <div className="w-full lg:w-2/6 flex flex-col gap-6">
                <div className="flex items-center gap-6">
                    <Home strokeWidth={1} size={30} className="text-gray-500" />
                    <div>
                        <p className="text-black text-[17px]">Buttonwood, California.</p>
                        <p className="text-gray-500">Rosemead, CA 91770</p>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <Tablet strokeWidth={1} size={30} className="text-gray-500" />
                    <div>
                        <p className="text-black text-[17px]">+998 33 004 08 04</p>
                        <p className="text-gray-500">{t('time')}</p>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <Mail strokeWidth={1} size={30} className="text-gray-500" />
                    <div>
                        <p className="text-black text-[17px]">company@name.com</p>
                        <p className="text-gray-500">{t('text2')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}