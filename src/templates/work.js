import React from "react";
import WorksPageLayout from "../components/WorksPageLayout";
import { WORKS } from "../constants/works";

export default function WorkPage({ pageContext }) {
  return <WorksPageLayout workId={pageContext.workId} />;
}

export function Head({ pageContext }) {
  const data = WORKS[pageContext.workId];
  return (
    <>
      <title>{`${data.title} - ideyuta.com`}</title>
      <meta property="og:title" content={data.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://ideyuta.com/works/${pageContext.workId}`} />
      <meta property="og:image" content={`https://ideyuta.com/images/works/${pageContext.workId}/img01.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@_ideyuta" />
    </>
  );
}
