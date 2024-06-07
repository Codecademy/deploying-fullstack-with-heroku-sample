import { useRef } from "react";
import AppCard from "@crema/components/AppCard";
import ImgUpload from "./ImageUpload";
import AppScrollbar from "@crema/components/AppScrollbar";
import { StyledTextMb } from "./index.styled";
import { Col, Form, Input } from "antd";
import PropTypes from "prop-types";
import JoditEditor from "jodit-react";

const config = {
  readonly: false, // all options from https://xdsoft.net/jodit/doc/
  toolbar: true,
  minHeight: 300,
  maxHeight: 500,
  buttons: [
    "source",
    "|",
    "bold",
    "strikethrough",
    "underline",
    "italic",
    "|",
    "ul",
    "ol",
    "|",
    "outdent",
    "indent",
    "|",
    "font",
    "fontsize",
    "paragraph",
    "|",
    "image",
    "video",
    "table",
    "link",
    "|",
    "align",
    "undo",
    "redo",
    "selectall",
    "cut",
    "copy",
    "|",
    "hr",
    "|",
    "print",
    "symbol",
    "about",
  ],
  uploader: {
    insertImageAsBase64URI: true,
    url: "/api/upload",
    format: "json",
    imagesExtensions: ["jpg", "png", "jpeg", "gif"],
    headers: {
      "X-CSRF-TOKEN": "CSFR-Token",
      Authorization: "Bearer <JSON Web Token>",
    },
  },
  style: {
    "& .jodit .jodit-status-bar": {
      background: "#29572E",
      color: "rgba(255,255,255,0.5)",
    },
  },
};

const ProductContent = ({ uploadedFiles, setUploadedFiles }) => {
  const editor = useRef(null);
  return (
    <Col xs={24} lg={16}>
      <AppScrollbar style={{ height: "700px" }}>
        <AppCard>
          <Form.Item label="Product Name" name="title">
            <Input placeholder="Product Name" />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <JoditEditor
              ref={editor}
              // placeholder={messages["common.writeContent"] as string}
              config={config}
              tabIndex={1} // tabIndex of textarea
              // onChange={(value) => setFieldValue("content", value)}
            />
          </Form.Item>
          <StyledTextMb>Images</StyledTextMb>
          <ImgUpload
            uploadedFiles={uploadedFiles}
            setUploadedFiles={setUploadedFiles}
          />
        </AppCard>
      </AppScrollbar>
    </Col>
  );
};

ProductContent.propTypes = {
  uploadedFiles: PropTypes.array,
  setUploadedFiles: PropTypes.func,
};
export default ProductContent;
