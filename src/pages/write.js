import React, { useEffect } from "react";
import * as motion from "motion/react-client";
import { Link } from "gatsby";
import styled from "styled-components";
import Header from "../components/Header";

const Wrapper = styled(motion.div)`
  box-sizing: border-box;
  padding: 200px 24px;
  max-width: 800px;
  margin: 0 auto;
`;
const List = styled.ul`
  padding: 0;
`;
const ListItem = styled.li`
  list-style: none;
  padding: 4px 0;
`;

const POSTS = [
  { path: "/inside-the-stores", year: "2024", title: "ストアーズでのこと" },
  { path: "/stores-regi", year: "2021", title: "STORESレジができるまで" },
  {
    path: "/stores-dashboard-new-design",
    year: "2020",
    title: "STORESのダッシュボードをリニューアルしました",
  },
  { path: "/one-fine-day", year: "2020", title: "ある晴れた日のこと" },
  { path: "/vandlecard", year: "2016", title: "バンドルカードができるまで" },
];

export default function Write() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Wrapper
        initial={{ transform: "translateY(32px)", opacity: 0 }}
        animate={{ transform: "translateY(0px)", opacity: 1 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <List>
          {POSTS.map((post) => (
            <ListItem key={post.path}>
              <Link to={post.path}>
                {post.year} {post.title}
              </Link>
            </ListItem>
          ))}
        </List>
      </Wrapper>
    </>
  );
}

export function Head() {
  return <title>Write - ideyuta.com</title>;
}
