import { useLayoutEffect, useRef, useState } from 'react';
import {
  Affix,
  Checkbox,
  Chip,
  ColorInput,
  ColorPicker,
  FileInput,
  Grid,
  Group,
  Input,
  JsonInput,
  NativeSelect,
  NumberInput,
  PasswordInput,
  Radio,
  ScrollArea,
  Slider,
  Switch,
  TableOfContents,
  Textarea,
  TextInput,
} from '@mantine/core';
import { AppShell } from '@/components/AppShell';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

function Title() {
  return <ColorSchemeToggle />;
}

function TOCMain() {
  const reinitializeRef = useRef(() => {});

  useLayoutEffect(() => {
    reinitializeRef.current();
  }, []);

  return (
    <Affix position={{ top: 80, right: 80 }}>
      <ScrollArea mah={window.innerHeight * 0.75}>
        <TableOfContents
          reinitializeRef={reinitializeRef}
          variant="filled"
          color="teal"
          size="md"
          radius="sm"
          scrollSpyOptions={{
            selector: ':is(h3)',
          }}
          getControlProps={({ data }) => ({
            onClick: () => {
              const element = data.getNode();
              const y = element.getBoundingClientRect().top + window.scrollY - 100;
              window.scrollTo({ top: y, behavior: 'smooth' });
            },
            children: data.value,
          })}
        />
      </ScrollArea>
    </Affix>
  );
}

function TOC() {
  const reinitializeRef = useRef(() => {});

  useLayoutEffect(() => {
    reinitializeRef.current();
  }, []);

  return (
    <TableOfContents
      reinitializeRef={reinitializeRef}
      variant="filled"
      color="teal"
      size="md"
      radius="sm"
      scrollSpyOptions={{
        selector: ':is(h2)',
      }}
      getControlProps={({ data }) => ({
        onClick: () => {
          const element = data.getNode();
          const y = element.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        },
        children: data.value,
      })}
    />
  );
}

export function HomePage() {
  const [chipChecked, setChipChecked] = useState(false);
  const [color, setColor] = useState('rgba(47, 119, 150, 0.7)');
  const [selection, setSelection] = useState('');

  return (
    <>
      <AppShell logo={<Title />} navbar={<TOC />}>
        <Grid grow gutter={{ base: 5, xs: 'md', md: 'xl', xl: 100 }}>
          <Grid.Col span={12}>
            <Welcome />
          </Grid.Col>

          <Grid.Col span={12}>
            <h2>Inputs</h2>
          </Grid.Col>

          <Grid.Col span={12}>
            <h3>Checkbox</h3>
            <Checkbox defaultChecked label="I agree to sell my privacy" />
          </Grid.Col>

          <Grid.Col span={12}>
            <h3>Chip</h3>
            <Chip checked={chipChecked} onChange={() => setChipChecked((v) => !v)}>
              My chip
            </Chip>
          </Grid.Col>

          <Grid.Col span={12}>
            <h3>Color inputs</h3>
            <ColorInput
              label="Input label"
              description="Input description"
              placeholder="Input placeholder"
            />
          </Grid.Col>

          <Grid.Col span={12}>
            <h3>Color picker</h3>
            <ColorPicker format="rgba" value={color} onChange={setColor} />
            <code>{color}</code>
          </Grid.Col>

          <Grid.Col span={12}>
            <h3>File input</h3>
            <FileInput
              label="Input label"
              description="Input description"
              placeholder="Input placeholder"
            />
          </Grid.Col>

          <Grid.Col span={12}>
            <h3>Input</h3>
            <Input placeholder="Input component" />
          </Grid.Col>

          <Grid.Col span={12}>
            <h3>JSON input</h3>
            <JsonInput
              label="Your package.json"
              placeholder="Textarea will autosize to fit the content"
              validationError="Invalid JSON"
              formatOnBlur
              autosize
              minRows={4}
            />
          </Grid.Col>

          <Grid.Col span={12}>
            <h3>Select</h3>
            <NativeSelect
              value={selection}
              onChange={(event) => setSelection(event.currentTarget.value)}
              data={['React', 'Angular', 'Svelte', 'Vue']}
            />
          </Grid.Col>

          <Grid.Col span={12}>
            <h3>Number input</h3>
            <NumberInput
              label="Input label"
              description="Input description"
              placeholder="Input placeholder"
            />
          </Grid.Col>

          <Grid.Col span={12}>
            <h3>Password input</h3>
            <PasswordInput
              label="Input label"
              description="Input description"
              placeholder="Input placeholder"
            />
          </Grid.Col>

          <Grid.Col span={12}>
            <h3>Radio</h3>
            <Radio.Group
              name="favoriteFramework"
              label="Select your favorite framework/library"
              description="This is anonymous"
              withAsterisk
            >
              <Group mt="xs">
                <Radio value="react" label="React" />
                <Radio value="svelte" label="Svelte" />
                <Radio value="ng" label="Angular" />
                <Radio value="vue" label="Vue" />
              </Group>
            </Radio.Group>
          </Grid.Col>

          <Grid.Col span={12}>
            <h3>Slider</h3>
            <Slider
              color="blue"
              defaultValue={40}
              marks={[
                { value: 20, label: '20%' },
                { value: 50, label: '50%' },
                { value: 80, label: '80%' },
              ]}
            />
          </Grid.Col>

          <Grid.Col span={12}>
            <h3>Switch</h3>
            <Switch defaultChecked label="I agree to sell my privacy" />
          </Grid.Col>

          <Grid.Col span={12}>
            <h3>Textarea</h3>
            <Textarea
              label="Input label"
              description="Input description"
              placeholder="Input placeholder"
            />
          </Grid.Col>

          <Grid.Col span={12}>
            <h3>Textinput</h3>
            <TextInput
              label="Input label"
              description="Input description"
              placeholder="Input placeholder"
            />
          </Grid.Col>
        </Grid>
      </AppShell>
      <TOCMain />
    </>
  );
}
