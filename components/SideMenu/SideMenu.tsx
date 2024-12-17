'use client'

import { useDisclosure } from "@mantine/hooks"
import { Drawer, Button } from "@mantine/core"

export function SideMenu() {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Drawer opened={opened} onClose={close} title="Menu">
                drawer content
            </Drawer>

            <Button variant="default" onClick={open}>
                Open Drawer
            </Button>
        </>
    );
}