import React from "react";
import ReactDataGrid from "react-data-grid";
import "./style.scss";

interface Row {
  id: number;
  title: string;
  count: number;
  country: string;
}

interface DataGridProps {
  columns: {
    key: string;
    name: string;
  }[];
  rows: Row[];
}

const columns = [
    { key: "id", name: "ID" },
    { key: "title", name: "Number" },
    { key: "country", name: "Country" },
  ],
  rows = [
    { id: 0, title: "One", count: 20, country: "UK" },
    { id: 1, title: "Two", count: 40, country: "USA" },
    { id: 2, title: "Three", count: 60, country: "Canada" },
    { id: 3, title: "Four", count: 80, country: "Greece" },
    { id: 4, title: "Five", count: 100, country: "Iceland" },
    { id: 5, title: "Six", count: 120, country: "Germany" },
  ];

export const DataGrid = () => {
  const RowRenderer = ({ row, idx }: { row: Row; idx: number }) => {
    return (
      <div className="react-data-row">
        <span className="react-data-row__id">{row.id}</span>
        <span className="react-data-row__title">{row.title}</span>
        <span className="react-data-row__country">{row.country}</span>
        <span className="react-data-row__count">{row.count}</span>
      </div>
    );
  };

  return (
    <div className="react-data">
      <ReactDataGrid columns={columns} rows={rows} />
    </div>
  );
};
