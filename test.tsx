interface AppProps {
    x: number | undefined;
}

export const App = (props: AppProps) => {
    const { x } = props;

    return <svg x={x} />
}
