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
                        setItems([
                            ...items,
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
                        setItems([
                            ...items,
                            ...[
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
