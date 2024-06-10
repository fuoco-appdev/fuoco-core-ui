import { useState } from 'react'
import { Scroll } from '.'

export default {
    title: 'General/Scroll',
    component: Scroll,
}

export const Default = (args: any) => {
    const [isReloading, setIsReloading] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [items, setItems] = useState<JSX.Element[]>([
        <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
        <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
        <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
        <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
        <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
        <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
        <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
        <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
        <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
        <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
        <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
        <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
    ])
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '80vh',
            }}
        >
            <Scroll
                loadingHeight={80}
                reloadComponent={
                    <div
                        style={{
                            height: 40,
                            width: 40,
                            borderRadius: 40,
                            backgroundColor: '#fff',
                        }}
                    />
                }
                loadComponent={
                    <div
                        style={{
                            height: 40,
                            width: 40,
                            borderRadius: 40,
                            backgroundColor: '#fff',
                        }}
                    />
                }
                isReloading={isReloading}
                isLoading={isLoading}
                onReload={() => {
                    setIsReloading(true)
                    setItems([]);
                    setTimeout(() => {
                        setItems([
                            <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
                            <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
                            <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
                            <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
                            <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
                            <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
                            <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
                            <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
                            <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
                            <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
                            <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
                            <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
                        ])
                        setIsReloading(false)
                    }, 2000)
                }}
                onLoad={() => {
                    setIsLoading(true)
                    setTimeout(() => {
                        setItems((prevState) => [
                            ...prevState,
                            ...[
                                <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
                                <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
                                <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
                                <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
                                <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
                                <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
                                <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
                                <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
                                <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
                                <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
                                <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
                                <div style={{ height: 250, width: 250, backgroundColor: '#fff' }} />,
                            ],
                        ])
                        setIsLoading(false)
                    }, 2000)
                }}
            >
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                    {items}
                </div>
            </Scroll>
        </div>
    )
}

export const TouchScreen = (args: any) => {
    const [isReloading, setIsReloading] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [items, setItems] = useState<JSX.Element[]>([
        <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
        <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
    ])
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '80vh',
            }}
        >
            <Scroll
                touchScreen={true}
                loadingHeight={80}
                pullIndicatorComponent={
                    <div
                        style={{
                            height: 40,
                            width: 20,
                            borderRadius: 20,
                            backgroundColor: '#fff',
                        }}
                    >
                        <div style={{
                            height: 20,
                            width: 20,
                            borderRadius: 20,
                            backgroundColor: 'red',
                        }} />
                    </div>
                }
                reloadComponent={
                    <div
                        style={{
                            height: 40,
                            width: 40,
                            borderRadius: 40,
                            backgroundColor: '#fff',
                        }}
                    />
                }
                loadComponent={
                    <div
                        style={{
                            height: 40,
                            width: 40,
                            borderRadius: 40,
                            backgroundColor: '#fff',
                        }}
                    />
                }
                isReloading={isReloading}
                isLoading={isLoading}
                onReload={() => {
                    setIsReloading(true)
                    setTimeout(() => {
                        setItems([
                            <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
                            <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
                            <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
                            <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
                            <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
                            <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
                            <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
                            <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
                            <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
                            <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
                            <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
                            <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
                            <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
                            <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
                        ])
                        setIsReloading(false)
                    }, 2000)
                }}
                onLoad={() => {
                    setIsLoading(true)
                    setTimeout(() => {
                        setItems((prevState) => [
                            ...prevState,
                            ...[
                                <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
                                <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
                                <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
                                <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
                                <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
                                <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
                            ],
                        ])
                        setIsLoading(false)
                    }, 2000)
                }}
            >
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                    {items}
                </div>
            </Scroll>
        </div>
    )
}

export const TouchScreenReverse = (args: any) => {
    const [isReloading, setIsReloading] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [items, setItems] = useState<JSX.Element[]>([
        <div style={{ height: 40, width: '100%', backgroundColor: '#fff', color: '#000', textAlign: 'center' }}>1</div>,
        <div style={{ height: 40, width: '100%', backgroundColor: '#fff', color: '#000', textAlign: 'center' }}>2</div>,
        <div style={{ height: 40, width: '100%', backgroundColor: '#fff', color: '#000', textAlign: 'center' }}>3</div>,
        <div style={{ height: 40, width: '100%', backgroundColor: '#fff', color: '#000', textAlign: 'center' }}>4</div>,
        <div style={{ height: 40, width: '100%', backgroundColor: '#fff', color: '#000', textAlign: 'center' }}>5</div>,
        <div style={{ height: 40, width: '100%', backgroundColor: '#fff', color: '#000', textAlign: 'center' }}>6</div>,
        <div style={{ height: 40, width: '100%', backgroundColor: '#fff', color: '#000', textAlign: 'center' }}>7</div>,
        <div style={{ height: 40, width: '100%', backgroundColor: '#fff', color: '#000', textAlign: 'center' }}>8</div>,
        <div style={{ height: 40, width: '100%', backgroundColor: '#fff', color: '#000', textAlign: 'center' }}>9</div>,
        <div style={{ height: 40, width: '100%', backgroundColor: '#fff', color: '#000', textAlign: 'center' }}>10</div>,
        <div style={{ height: 40, width: '100%', backgroundColor: '#fff', color: '#000', textAlign: 'center' }}>11</div>,
        <div style={{ height: 40, width: '100%', backgroundColor: '#fff', color: '#000', textAlign: 'center' }}>12</div>,
        <div style={{ height: 40, width: '100%', backgroundColor: '#fff', color: '#000', textAlign: 'center' }}>13</div>,
        <div style={{ height: 40, width: '100%', backgroundColor: '#fff', color: '#000', textAlign: 'center' }}>14</div>,
    ])
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '80vh',
            }}
        >
            <Scroll
                touchScreen={true}
                reverse={true}
                loadingHeight={80}
                pullIndicatorComponent={
                    <div
                        style={{
                            height: 40,
                            width: 20,
                            borderRadius: 20,
                            backgroundColor: '#fff',
                        }}
                    >
                        <div style={{
                            height: 20,
                            width: 20,
                            borderRadius: 20,
                            backgroundColor: 'red',
                        }} />
                    </div>
                }
                reloadComponent={
                    <div
                        style={{
                            height: 40,
                            width: 40,
                            borderRadius: 40,
                            backgroundColor: '#fff',
                        }}
                    />
                }
                loadComponent={
                    <div
                        style={{
                            height: 40,
                            width: 40,
                            borderRadius: 40,
                            backgroundColor: '#fff',
                        }}
                    />
                }
                isReloading={isReloading}
                isLoading={isLoading}
                onLoad={() => {
                    setIsLoading(true)
                    setTimeout(() => {
                        setItems((prevState) => [
                            ...prevState,
                            ...[
                                <div style={{ height: 40, width: '100%', backgroundColor: '#fff', color: '#000', textAlign: 'center' }}>{prevState.length + 1}</div>,
                                <div style={{ height: 40, width: '100%', backgroundColor: '#fff', color: '#000', textAlign: 'center' }}>{prevState.length + 2}</div>,
                                <div style={{ height: 40, width: '100%', backgroundColor: '#fff', color: '#000', textAlign: 'center' }}>{prevState.length + 3}</div>,
                                <div style={{ height: 40, width: '100%', backgroundColor: '#fff', color: '#000', textAlign: 'center' }}>{prevState.length + 4}</div>,
                                <div style={{ height: 40, width: '100%', backgroundColor: '#fff', color: '#000', textAlign: 'center' }}>{prevState.length + 5}</div>,
                                <div style={{ height: 40, width: '100%', backgroundColor: '#fff', color: '#000', textAlign: 'center' }}>{prevState.length + 6}</div>,
                            ],
                        ])
                        setIsLoading(false)
                    }, 2000)
                }}
            >
                <div style={{
                    display: 'flex', gap: 16,
                    flexDirection: 'column-reverse'
                }}>
                    {items}
                </div>
            </Scroll>
        </div>
    )
}

export const NotLoadableTouchScreen = (args: any) => {
    const [isReloading, setIsReloading] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [items, setItems] = useState<JSX.Element[]>([
        <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
        <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
        <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
        <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
        <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
        <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
        <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
        <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
        <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
        <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
        <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
        <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
        <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
        <div style={{ height: 40, width: '100%', backgroundColor: '#fff' }} />,
    ])
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '80vh',
            }}
        >
            <Scroll
                touchScreen={true}
                loadingHeight={80}
                isLoadable={false}
            >
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                    {items}
                </div>
            </Scroll>
        </div>
    )
}
