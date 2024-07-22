import React from 'react';
import FeaturesItem from '../FeaturesItem/FeaturesItem';
import css from "./Features.module.css";

export default function Features({
    form,
    length,
    width,
    height,
    tank,
    consumption,
    adults,
    children,
    engine,
    transmission,
    details
}) {
    return (
        <div className={css.features}>
            <FeaturesItem
                form={form}
                length={length}
                width={width}
                height={height}
                tank={tank}
                consumption={consumption}
                adults={adults}
                children={children}
                engine={engine}
                transmission={transmission}
                details={details}
            />
        </div>
    );
}
