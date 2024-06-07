import React from "react";
import { useLocation } from "react-router-dom";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

const SITE_URL =
  import.meta.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://ant-cra.cremawork.com/";

const FACEBOOK_APP_ID = "XXXXXXXXX";

const defaultTitle = "Crema-Ant Design admin Template";
const defaultDescription =
  "Crema Ant is an Ant design based admin template. buid with CRA all ant library. ";
const defaultImage =
  "https://firebasestorage.googleapis.com/v0/b/crema-demo.appspot.com/o/logo512.png?alt=media";
const defaultTwitter = "@crema";
const defaultSep = " | ";

const AppPageMeta = ({ children, ...rest }) => {
  const { pathname } = useLocation();
  const getMetaTags = (
    {
      title,
      description,
      image,
      contentType,
      twitter,
      noCrawl,
      published = "01-05-2021",
      updated,
      category = "admin Template, admin Dashboard, ",
      tags = "admin Template, admin Dashboard, CRA, Antd, Ant Design, Less, Create React App, Firebase, Aws Cognito, Jwt-Auth, Mail App, Todo App, ",
    },
    pathname,
  ) => {
    const theTitle = title
      ? (title + defaultSep + defaultTitle).substring(0, 60)
      : defaultTitle;
    const theDescription = description
      ? description.substring(0, 155)
      : defaultDescription;
    const theImage = image ? `${SITE_URL}${image}` : defaultImage;

    const metaTags = [
      { itemprop: "name", content: theTitle },
      { itemprop: "description", content: theDescription },
      { itemprop: "image", content: theImage },
      { name: "description", content: theDescription },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: defaultTwitter },
      { name: "twitter:title", content: theTitle },
      { name: "twitter:description", content: theDescription },
      { name: "twitter:creator", content: twitter || defaultTwitter },
      { name: "twitter:image:src", content: theImage },
      { property: "og:title", content: theTitle },
      { property: "og:type", content: contentType || "website" },
      { property: "og:url", content: SITE_URL + pathname },
      { property: "og:description", content: theDescription },
      { property: "og:site_name", content: defaultTitle },
      { property: "fb:app_id", content: FACEBOOK_APP_ID },
    ];

    if (noCrawl) {
      metaTags.push({ name: "robots", content: "noindex, nofollow" });
    }

    if (published) {
      metaTags.push({ name: "article:published_time", content: published });
    }
    if (updated) {
      metaTags.push({ name: "article:modified_time", content: updated });
    }
    if (category) {
      metaTags.push({ name: "article:section", content: category });
    }
    if (tags) {
      metaTags.push({ name: "article:tag", content: tags });
    }

    return metaTags;
  };

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "en",
          itemscope: undefined,
          itemtype: `http://schema.org/${rest.schema || "admin Template"}`,
        }}
        title={
          rest.title ? rest.title + defaultSep + defaultTitle : defaultTitle
        }
        link={[
          {
            rel: "canonical",
            href: SITE_URL + pathname,
          },
        ]}
        meta={getMetaTags(rest, pathname)}
      />
      {children}
    </>
  );
};

export default AppPageMeta;

AppPageMeta.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
};
