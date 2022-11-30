import { Edit, Delete, More } from "@mui/icons-material";
import { MenuComponent } from "../../../components/Modal";
import { Button } from "@mui/material";
import * as yup from "yup";
import { useFormikContext } from "formik";

export const popoverList = [
  { label: "Sửa nội dung", icon: <Edit />, action: () => console.log("helo") },
  { label: "Xóa phim", icon: <Delete />, action: () => console.log("delete") },
];

export const columns = (props) => [
  { field: "id", headerName: "ID", width: 70 },
  { field: "filmCode", headerName: "Mã phim", width: 200 },
  { field: "name", headerName: "Tên phim", width: 250 },
  {
    field: "createAt",
    headerName: "Năm sản xuất",
    width: 120,
  },
  { field: "actor", headerName: "Đạo diễn", width: 250 },
  { field: "category", headerName: "Thể loại", width: 250 },
  {
    field: "abc",
    headerName: "Thao tác",
    width: 160,
    renderCell: () => (
      <div>
        <Button
          onClick={props.handleClick}
          id="button"
          aria-controls={Boolean(props.anchorEl) ? "menu" : undefined}
          aria-haspopup="true"
          aria-expanded={Boolean(props.anchorEl) ? "true" : undefined}
        >
          <More />
        </Button>
        <MenuComponent
          anchorEl={props.anchorEl}
          onClose={props.handleClose}
          list={popoverList}
        />
      </div>
    ),
  },
];

export const filmsField = (values) => {
  return [
    { key: "name", label: "Tên phim", width: 12, value: values?.name },
    { key: "filmCode", label: "Mã phim", width: 4, value: values?.filmCode },
    { key: "actor", label: "Tác giả", width: 7, value: values?.actor },
    {
      key: "release",
      label: "Thời gian phát hành",
      width: 4,
      value: values?.release,
      type: "date",
    },
    {
      key: "createAt",
      label: "Năm phát hành",
      width: 3,
      value: values?.createAt,
    },
    {
      key: "category",
      label: "Thể loại phim",
      width: 4,
      value: values?.category,
    },
    { key: "like", label: "Số lượt thích", width: 4, value: values?.like, type: 'int' },
    { key: "rating", label: "Đánh giá", width: 3, value: values?.rating, type: 'float' },
    {
      key: "totalView",
      label: "Tổng số lượt xem",
      width: 4,
      value: values?.totalView,
      type: 'int'
    },
    {
      key: "description",
      label: "Nội dung",
      width: 12,
      value: values?.description,
    },
    { key: "link", label: "Đường dẫn phim", width: 12, value: values?.link },
    {
      key: "poster",
      label: "Ảnh poster",
      width: 12,
      value: values?.poster,
      type: "file",
    },
  ];
};
