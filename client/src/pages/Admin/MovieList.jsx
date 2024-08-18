import React, { useEffect, useState } from 'react';
import { Table, Button } from "antd";
import { getAllMovies } from '../../api/movies';
import MovieForm from "./MovieForm";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getData = async () => {
    const response = await getAllMovies();
    const allMovies = response.data;
    console.log(allMovies, 'test');
    setMovies(allMovies.map(function (item) {
      return { ...item, key: `movie${item._id}` };
    }));
  }

  useEffect(() => {
    getData();
  }, []);

  const tableHeadings = [
    {
      title: "Poster",
      dataIndex: "poster",
      render: (text, data) => {
        return (
          <img src={data.poster} width="75" height="115" />
        )
      },
    },
    {
      title: "Movie Name",
      dataIndex: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Duration",
      dataIndex: "duration",
    },
    {
      title: "Genre",
      dataIndex: "genre",
    },
    {
      title: "Release Date",
      dataIndex: "releaseDate",
      render: (text) => {
        let newDate = new Date(text);
        const formattedDate = newDate.toDateString();
        return (
          <span>{formattedDate}</span>
        )
      }
    },
    {
      title: "Language",
      dataIndex: "language",
    },
  ]

  return (
    <>
      <div className="d-flex justify-content-end">
        <Button
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Add Movie
        </Button>
      </div>
      {
        isModalOpen &&
        <MovieForm
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}

        />
      }
      <Table columns={tableHeadings} dataSource={movies} />
    </>
  )

}

export default MovieList