import React from 'react';
import {cn} from "@/lib/utils";
import {Container} from "@/components/shared/container";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({className}) => {
    return (
        <div className={cn('border border-b', className)}>
            <Container>

            </Container>
        </div>
    );
};