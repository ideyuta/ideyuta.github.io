import React from "react";
import styled from "styled-components";

const Page = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 48px 24px;
`;
const Section = styled.section`
  margin-bottom: 64px;
`;
const SectionTitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 24px 0;
  padding: 0;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 8px;
`;
const SwatchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
`;
const Swatch = styled.div`
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--color-border);
`;
const SwatchColor = styled.div`
  height: 64px;
`;
const SwatchLabel = styled.div`
  padding: 8px;
  font-size: 0.75rem;
  line-height: 1.4;
`;
const SwatchName = styled.div`
  font-weight: 600;
`;
const SwatchValue = styled.div`
  color: var(--color-text-muted);
`;
const SpacingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
`;
const SpacingBar = styled.div`
  background: var(--color-theme);
  height: 24px;
  border-radius: 4px;
`;
const SpacingLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  min-width: 100px;
`;
const TypeRow = styled.div`
  margin-bottom: 24px;
`;
const TypeMeta = styled.p`
  font-size: 0.75rem;
  color: var(--color-text-muted);
  margin: 4px 0 0 0;
`;

const colors = [
  { name: "theme", var: "--color-theme", value: "#35BA7A" },
  { name: "bg", var: "--color-bg", value: "#fff" },
  { name: "bg-dark", var: "--color-bg-dark", value: "#000" },
  { name: "text", var: "--color-text", value: "#333" },
  { name: "text-muted", var: "--color-text-muted", value: "#999" },
  { name: "text-subtle", var: "--color-text-subtle", value: "#bbb" },
  { name: "border", var: "--color-border", value: "#e9e9e9" },
  { name: "blockquote", var: "--color-blockquote", value: "#959595" },
  { name: "link-hover", var: "--color-link-hover", value: "#CCB080" },
  { name: "accent", var: "--color-accent", value: "#0066ff" },
  { name: "gray-20", var: "--color-gray-20", value: "#F2F2EE" },
  { name: "gray-100", var: "--color-gray-100", value: "#D7DCCD" },
  { name: "gray-400", var: "--color-gray-400", value: "#BAC7B9" },
  { name: "gray-500", var: "--color-gray-500", value: "#80978C" },
  { name: "gray-800", var: "--color-gray-800", value: "#385F62" },
  { name: "gray-900", var: "--color-gray-900", value: "#00454E" },
];

const spacings = [
  { name: "tiny", var: "--space-tiny", value: "8px" },
  { name: "small", var: "--space-small", value: "16px" },
  { name: "regular", var: "--space-regular", value: "24px" },
  { name: "medium", var: "--space-medium", value: "32px" },
  { name: "large", var: "--space-large", value: "48px" },
];

export default function DesignSystem() {
  return (
    <Page>
      <h1 style={{ fontSize: "2rem", fontWeight: 700, margin: "0 0 48px 0" }}>
        Design System
      </h1>

      <Section>
        <SectionTitle>Colors</SectionTitle>
        <SwatchGrid>
          {colors.map((c) => (
            <Swatch key={c.name}>
              <SwatchColor style={{ background: `var(${c.var})` }} />
              <SwatchLabel>
                <SwatchName>{c.name}</SwatchName>
                <SwatchValue>{c.value}</SwatchValue>
                <SwatchValue>{c.var}</SwatchValue>
              </SwatchLabel>
            </Swatch>
          ))}
        </SwatchGrid>
      </Section>

      <Section>
        <SectionTitle>Spacing</SectionTitle>
        {spacings.map((s) => (
          <SpacingRow key={s.name}>
            <SpacingLabel>
              {s.name} ({s.value})
            </SpacingLabel>
            <SpacingBar style={{ width: `var(${s.var})` }} />
          </SpacingRow>
        ))}
      </Section>

      <Section>
        <SectionTitle>Typography</SectionTitle>
        <TypeRow>
          <h1 style={{ fontSize: "2.6rem", fontWeight: 700, margin: 0 }}>
            Heading 1
          </h1>
          <TypeMeta>2.6rem / 700</TypeMeta>
        </TypeRow>
        <TypeRow>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 600, margin: 0, padding: 0 }}>
            Heading 2
          </h2>
          <TypeMeta>1.8rem / 600</TypeMeta>
        </TypeRow>
        <TypeRow>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 500, margin: 0, padding: 0 }}>
            Heading 3
          </h3>
          <TypeMeta>1.3rem / 500</TypeMeta>
        </TypeRow>
        <TypeRow>
          <h4 style={{ fontSize: "0.875rem", fontWeight: 600, margin: 0 }}>
            Heading 4
          </h4>
          <TypeMeta>0.875rem / 600</TypeMeta>
        </TypeRow>
        <TypeRow>
          <p style={{ fontSize: "0.875rem", lineHeight: "1.7em", margin: 0 }}>
            Body text - こんにちは、いでです。東京でデザイナーをしています。インタラクションデザインを軸にデザインしたりコードを書いたりしています。
          </p>
          <TypeMeta>0.875rem / 400 / line-height 1.7em</TypeMeta>
        </TypeRow>
        <TypeRow>
          <p
            style={{
              fontSize: "0.75rem",
              lineHeight: "1.5em",
              color: "var(--color-text-muted)",
              margin: 0,
            }}
          >
            Caption text
          </p>
          <TypeMeta>0.75rem / 400 / line-height 1.5em</TypeMeta>
        </TypeRow>
      </Section>

      <Section>
        <SectionTitle>Links</SectionTitle>
        <p>
          <a href="#">Default link</a>
        </p>
        <div
          style={{
            background: "var(--color-bg-dark)",
            padding: "16px",
            borderRadius: "8px",
            marginTop: "8px",
          }}
        >
          <a href="#" style={{ color: "var(--color-bg)" }}>
            Link on dark background
          </a>
        </div>
      </Section>
    </Page>
  );
}

export function Head() {
  return <title>Design System - ideyuta.com</title>;
}
