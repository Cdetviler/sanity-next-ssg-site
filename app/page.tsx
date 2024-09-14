import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Stack from "@/components/Stack/Stack";
import Box from "@/components/Box/Box";
import Heading from "@/components/Heading/Heading";

export default function Home() {
  return (
    <main>
      <Box color="neutral" hierarchy="ghost" padding="md">
        <Box hierarchy="ghost" padding="sm">
          <Stack crossDirectionalAlign="flex-start">
            <Stack direction="column">
              <Box height="auto" padding="sm">
                <Stack direction="column">
                  <Button color="secondary"> Secondary </Button>
                  <Button color="secondary" hierarchy="outlined"> secondary ghost </Button>
                  <Button color="secondary" hierarchy="ghost"> secondary ghost </Button>
                </Stack>
              </Box>
              <Box color="primary" hierarchy="ghost" height="auto" padding="sm">
                <Stack direction="column">
                  <Button color="primary"> primary </Button>
                  <Button color="primary" hierarchy="outlined"> primary ghost </Button>
                  <Button color="primary" hierarchy="ghost"> primary ghost </Button>
                </Stack>
              </Box>
            </Stack>
            <Box color="secondary" hierarchy="contained" height="auto" padding="sm">
              <Stack direction="column">
                <Button color="primary"> Secondary </Button>
                <Button color="primary" hierarchy="outlined"> secondary ghost </Button>
                <Button color="primary" hierarchy="ghost"> secondary ghost </Button>
                <Button color="tertiary"> Secondary </Button>
                <Button color="tertiary" hierarchy="outlined"> secondary ghost </Button>
                <Button color="tertiary" hierarchy="ghost"> secondary ghost </Button>
              </Stack>
            </Box>
            <Stack direction="column">
              <Box color="tertiary" hierarchy="contained" height="auto" padding="sm">
                <Stack direction="column">
                  <Button color="secondary"> Secondary </Button>
                  <Button color="secondary" hierarchy="outlined"> secondary ghost </Button>
                  <Button color="secondary" hierarchy="ghost"> secondary ghost </Button>
                </Stack>
              </Box>
              <Box color="tertiary" hierarchy="ghost" height="auto" padding="sm">
                <Stack direction="column">
                  <Button color="tertiary"> tertiary </Button>
                  <Button color="tertiary" hierarchy="outlined"> tertiary ghost </Button>
                  <Button color="tertiary" hierarchy="ghost"> tertiary ghost </Button>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Box>
        <Box hierarchy="ghost" padding="sm">
          <Stack crossDirectionalAlign="flex-start">
            <Box hierarchy="ghost" padding="sm" height="auto">
              <Heading>Heading 1 Primary</Heading>
              <Heading tag="h2">Heading 2 Primary</Heading>
              <Heading tag="h3">Heading 3 Primary</Heading>
              <Heading tag="h4">Heading 4 Primary</Heading>
              <Heading tag="h5">Heading 5 Primary</Heading>
              <Heading tag="h6">Heading 6 Primary</Heading>
            </Box>
            <Box color="primary" padding="sm" height="auto">
              <Heading color="secondary">Heading 1 Secondary</Heading>
              <Heading color="secondary" tag="h2">Heading 2 Secondary</Heading>
              <Heading color="secondary" tag="h3">Heading 3 Secondary</Heading>
              <Heading color="secondary" tag="h4">Heading 4 Secondary</Heading>
              <Heading color="secondary" tag="h5">Heading 5 Secondary</Heading>
              <Heading color="secondary" tag="h6">Heading 6 Secondary</Heading>
            </Box>
            <Box hierarchy="ghost" padding="sm" height="auto">
              <Heading color="tertiary">Heading 1 Tertiary</Heading>
              <Heading color="tertiary" tag="h2">Heading 2 Tertiary</Heading>
              <Heading color="tertiary" tag="h3">Heading 3 Tertiary</Heading>
              <Heading color="tertiary" tag="h4">Heading 4 Tertiary</Heading>
              <Heading color="tertiary" tag="h5">Heading 5 Tertiary</Heading>
              <Heading color="tertiary" tag="h6">Heading 6 Tertiary</Heading>
            </Box>
          </Stack>
        </Box>
        <Box hierarchy="ghost" padding="sm">
          <Stack crossDirectionalAlign="flex-start">
            <Box color="primary" padding="sm" height="auto">
              <Heading color="neutral-light">Heading 1 Neutral Light</Heading>
              <Heading color="neutral-light" tag="h2">Heading 2 Neutral Light</Heading>
              <Heading color="neutral-light" tag="h3">Heading 3 Neutral Light</Heading>
              <Heading color="neutral-light" tag="h4">Heading 4 Neutral Light</Heading>
              <Heading color="neutral-light" tag="h5">Heading 5 Neutral Light</Heading>
              <Heading color="neutral-light" tag="h6">Heading 6 Neutral Light</Heading>
            </Box>
            <Box hierarchy="ghost" padding="sm" height="auto">
              <Heading color="neutral-dark">Heading 1 Neutral Dark</Heading>
              <Heading color="neutral-dark" tag="h2">Heading 2 Neutral Dark</Heading>
              <Heading color="neutral-dark" tag="h3">Heading 3 Neutral Dark</Heading>
              <Heading color="neutral-dark" tag="h4">Heading 4 Neutral Dark</Heading>
              <Heading color="neutral-dark" tag="h5">Heading 5 Neutral Dark</Heading>
              <Heading color="neutral-dark" tag="h6">Heading 6 Neutral Dark</Heading>
            </Box>
          </Stack>
        </Box>
      </Box>
    </main>
  );
}
