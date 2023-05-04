import React, { useRef, useState } from "react";
import styles from "./ArticleBuilder.module.scss";
import Toolbar from "./Toolbar";
import { Container } from "react-bootstrap";
import Navigation from "../../Layout/Navigation/Navigation";
import PageWrapper from "../../UI/PageWrapper";
import { useDispatch, useSelector } from "react-redux";
import { newArticleActions } from "@/store/new-article";
import LabelDropdown from "./MetaData";
import dynamic from "next/dynamic";

const ArticleTitleInput = dynamic(() => import("./TitleInput"), {
  ssr: false,
});
const ArticleMainImageInput = dynamic(() => import("./ImageUpload"), {
  ssr: false,
});
const TextSection = dynamic(() => import("./TextSection"), {
  ssr: false,
});
const Description = dynamic(() => import("./Description"), {
  ssr: false,
});

const ErrorModal = dynamic(() => import("@/components/ErrorModal/ErrorModal"), {
  ssr: false,
});
const getSectionComponent = (componentName, props) => {
  const components = {
    title: <ArticleTitleInput {...props} />,
    "image-main": <ArticleMainImageInput type="main" {...props} />,
    "image-regular": <ArticleMainImageInput {...props} />,
    "image-gallery": <ArticleMainImageInput type="gallery" {...props} />,
    description: <Description {...props} />,
    "text-section": <TextSection {...props} />,
  };
  return components[componentName];
};
const BlogPostEditor = () => {
  const dispatch = useDispatch();
  const sections = useSelector((state) => state.newArticle.sections);

  const addSection = (sectionName) => {
    dispatch(newArticleActions.addSection(sectionName));
  };
  const errorMessage = useSelector((state) => state.error.errorMessage);

  return (
    <>
      {errorMessage && <ErrorModal errorMessage={errorMessage} />}
      <Navigation />
      <PageWrapper>
        <Container className={styles.articleContainer}>
          <LabelDropdown />

          {sections.map((section) => {
            return getSectionComponent(section.componentName, section.props);
          })}
        </Container>
        <Toolbar handleAddSection={addSection} />
      </PageWrapper>
    </>
  );
};

export default BlogPostEditor;

// export default function TemplateDemo() {
//     const [text, setText] = useState('<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>');

//     return (
//         <div className="card">
//             <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} headerTemplate={header} style={{ height: '320px' }} />
//         </div>
//     )
// }
