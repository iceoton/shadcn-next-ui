"use client";

import {Button} from "@nextui-org/button";
import {Card, CardBody} from "@nextui-org/card";
import {Input} from "@nextui-org/input";
import React, {useState} from "react";
import {EyeFilledIcon, EyeSlashFilledIcon} from "@nextui-org/shared-icons";

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <div className="flex flex-col justify-center items-center">
            <Card className="max-w-[500px]">
                <CardBody className="flex flex-col gap-6">
                    <Input
                        isClearable
                        type="email"
                        label="Email"
                        variant="bordered"
                        placeholder="Enter your email"
                        defaultValue="junior@nextui.org"
                        onClear={() => console.log("input cleared")}
                        className="max-w-xs"
                    />
                    <Input
                        label="Password"
                        variant="bordered"
                        placeholder="Enter your password"
                        endContent={
                            <button className="focus:outline-none" type="button" onClick={toggleVisibility}
                                    aria-label="toggle password visibility">
                                {isVisible ? (
                                    <EyeSlashFilledIcon
                                        className="text-2xl text-default-400 pointer-events-none"/>
                                ) : (
                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none"/>
                                )}
                            </button>
                        }
                        type={isVisible ? "text" : "password"}
                        className="max-w-xs"
                    />
                    <Button color="primary" size="lg">Submit</Button>
                </CardBody>
            </Card>
        </div>
    );
}
