import { ArrowRightIcon, Mail, MapPin, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Card } from "@/components/ui/card";
import { ScrollView } from "../../scroll-view";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function FeaturesSection() {
    return (
        <section className="relative overflow-hidden" id="contact">
            <div className="absolute inset-2 -z-10 overflow-hidden rounded-3xl border">
                <Image
                    src={"/images/abstract-2.png"}
                    alt={"Cover image"}
                    height="480"
                    width="720"
                    loading="lazy"
                    className="size-full -scale-x-100 object-cover opacity-80 dark:opacity-40"
                />
            </div>

            <div className="mx-auto max-w-6xl px-6 py-16 md:py-32">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div>
                            <ScrollView>
                                <p className="text-xl">
                                    Ready to gain <span className="font-bold italic">momentum</span>?
                                </p>
                                <h2 className="text-5xl font-semibold">
                                    Let&apos;s make it happen.
                                </h2>
                            </ScrollView>
                            <ScrollView>
                                <p className="mt-6">
                                    Got questions or ready to start? Shoot me a message or book a call and let’s get moving!
                                </p>
                                <Separator className="my-6" />
                                <Button
                                    asChild
                                    size="lg"
                                    iconPlacement="right"
                                    className="mx-auto h-14 px-5 py-6 text-base rounded-full"
                                    icon={ArrowRightIcon}
                                    effect={'expandIcon'}
                                    data-cal-link="ahujaankush"
                                    data-cal-config='{"theme":"dark"}'
                                >
                                    <span className="text-nowrap text-xl font-medium">Book a Call</span>
                                </Button>
                            </ScrollView>
                        </div>
                    </div>
                    <div className="lg:col-span-3">
                        <Card className="bg-card/50 backdrop-blur-lg mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-16 w-full">
                            <div>
                                <h3 className="text-lg font-semibold">
                                    Shoot Me a Message
                                </h3>
                                <p className="mt-4 text-sm">
                                    Don&apos;t hold back! The more you share, the faster I can whip up the perfect solution for you.
                                </p>
                            </div>

                            <form
                                action="https://formsubmit.co/feea37c2fe926ffb48cffab74c626ea1"
                                className="**:[&>label]:block mt-4 space-y-6 *:space-y-3"
                                method="post"
                            >
                                <div>
                                    <Label htmlFor="name">Your name*</Label>
                                    <Input name="name" type="text" id="name" required />
                                </div>

                                <div>
                                    <Label htmlFor="email">Email address*</Label>
                                    <Input name="email" type="email" id="email" required />
                                </div>

                                <div>
                                    <Label htmlFor="website">Company website</Label>
                                    <Input name="company_website" type="url" id="website" />
                                </div>

                                <div>
                                    <Label htmlFor="job">Company size*</Label>
                                    <Select name="company_size" required>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">Under $10K</SelectItem>
                                            <SelectItem value="2">$10K – $50K</SelectItem>
                                            <SelectItem value="3">$50K – $100K</SelectItem>
                                            <SelectItem value="4">$100K – $250K</SelectItem>
                                            <SelectItem value="5">$250K – $500K</SelectItem>
                                            <SelectItem value="6">Over $500K</SelectItem>
                                        </SelectContent>

                                    </Select>
                                </div>

                                <div>
                                    <Label htmlFor="msg">What challenges can I help you with?*</Label>
                                    <Textarea name="request" id="msg" rows={3} required />
                                </div>

                                <Button>Submit</Button>
                            </form>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
