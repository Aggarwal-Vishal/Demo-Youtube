const commentsData = [
  {
    name: "Vishal Aggarwal",
    text: "Lorem ipsum dolar sit amet consectur",
    replies: [],
  },
  {
    name: "Vishal Aggarwal",
    text: "Lorem ipsum dolar sit amet consectur",
    replies: [
      {
        name: "Vishal Aggarwal",
        text: "Lorem ipsum dolar sit amet consectur",
        replies: [
          {
            name: "Vishal Aggarwal",
            text: "Lorem ipsum dolar sit amet consectur",
            replies: [
              {
                name: "Vishal Aggarwal",
                text: "Lorem ipsum dolar sit amet consectur",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Vishal Aggarwal",
    text: "Lorem ipsum dolar sit amet consectur",
    replies: [
      {
        name: "Vishal Aggarwal",
        text: "Lorem ipsum dolar sit amet consectur",
        replies: [
          {
            name: "Vishal Aggarwal",
            text: "Lorem ipsum dolar sit amet consectur",
            replies: [],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://imgs.search.brave.com/d13gMNyry1MbXWRGgBid_XwL8WolAayNSKGHd4WtlKw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzE4LzAzLzM1/LzM2MF9GXzExODAz/MzUwNl91TXJobnJq/QldCeFZFOXNZR1Rn/Qmh0OFM1bGlWbkll/WS5qcGc"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index} className=" p-2">
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
