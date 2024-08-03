import { typoGraphy } from '@/lib/cssConfig';
import clsx from 'clsx';
import { FC, ComponentType } from 'react';

const DashboardWrapper = <P extends object>(WrappedComponent: ComponentType<P>,breadCrumbs:string[], head:string,  className?:string): FC<P> => {
    const Wrapper: FC<P> = (props) => {
        return (
            <div className={clsx("w-full flex-1 py-9 px-8 box-border flex flex-col gap-4 overflow-y-auto",className)}>
                <span className={clsx(typoGraphy.text18,"text-lightgray02 dark:text-gray02")}>
                    {breadCrumbs?.join("  >  ")}
                </span>

                <h2 className={clsx(typoGraphy.text48normal)}>{head}</h2>
                <WrappedComponent {...props} />
            </div>
        );
    };

    Wrapper.displayName = `Wrapper(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
    return Wrapper;
};

export default DashboardWrapper;
