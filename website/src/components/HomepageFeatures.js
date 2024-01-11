/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from "react";
import styles from "./styles.module.css";
import Feature from "@site/src/components/Feature";

/**
 * Fixed data that is rendered as a 'Feature' component on Homepage
 * Each element requires the following pieces of data:
 *  Svg = path to an svg that is rendered here within an <img> tag
 *  title = the short title given to feature component
 *  description = the 1-2 sentence description shown below title in Feature card
 *  link = the link associated with title and image (for redirection)
 */
const FeatureList = [
  {
    title: "Discover Resources",
    Svg: "img/home-discover.svg",
    link: "https://john0isaac.github.io/awesome-azure-sql/",
    description:
      "View our gallery of community-contributed and Microsoft-authored resources.",
    content: "View templates",
  },
  {
    title: "Learn more about Azure SQL",
    Svg: "img/home-learn.svg",
    link: "https://aka.ms/az-sql",
    description:
      "Read our documentation for more information about azure sql and its features.",
    content: "View docs",
  },
  {
    title: "Contribute to the Gallery",
    Svg: "img/home-contribute.svg",
    link: "https://john0isaac.github.io/awesome-azure-sql/docs/intro",
    description:
      "Learn how to create a resource with step-by-step instructions.",
    content: "View contributor guide",
  },
];

/**
 * Component that renders FeaturesList data in a container
 * with each data item represented as a Feature in a responsive grid
 */
export default function HomepageFeatures() {
  return (
    <div className={styles.features}>
      <div className={styles.row}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </div>
  );
}
