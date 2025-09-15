import React from 'react';
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
    return (
        <div className="p-8 space-y-8">
            <h1 className="text-xl font-extralight mb-8">Landing Page</h1>
            <Card />
            {/* Button Sizes */}
            <div className="space-y-4">
                <h2 className="text-lg font-medium">Button Sizes</h2>
                <div className="flex gap-4 items-center">
                    <Button title="Small Button" size="small" shape="rounded-md" />
                    <Button title="Medium Button" size="medium" shape="rounded-md" />
                    <Button title="Large Button" size="large" shape="rounded-md" />
                </div>
            </div>

            {/* Button Shapes */}
            <div className="space-y-4">
                <h2 className="text-lg font-medium">Button Shapes</h2>
                <div className="flex gap-4 items-center">
                    <Button title="Square-ish" size="medium" shape="rounded-sm" />
                    <Button title="Rounded" size="medium" shape="rounded-md" />
                    <Button title="Pill Shape" size="medium" shape="rounded-full" />
                </div>
            </div>

            {/* Mixed Variations */}
            <div className="space-y-4">
                <h2 className="text-lg font-medium">Mixed Variations</h2>
                <div className="flex gap-4 items-center flex-wrap">
                    <Button title="Small Pill" size="small" shape="rounded-full" />
                    <Button title="Medium Square" size="medium" shape="rounded-sm" />
                    <Button title="Large Rounded" size="large" shape="rounded-md" />
                </div>
            </div>
        </div>
    );
};

export default Landing;
