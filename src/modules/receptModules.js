import { createAction, handleActions } from "redux-actions";

const initialState = {
  datas: [
    {
      userId: 9,
      id: 86,
      title: "placeat quia et porro iste",
      body:
        "quasi excepturi consequatur iste autem temporibus sed molestiae beatae et quaerat et esse ut voluptatem occaecati et vel explicabo autem asperiores pariatur deserunt optio",
    },
    {
      userId: 9,
      id: 87,
      title: "nostrum quis quasi placeat",
      body:
        "eos et molestiae nesciunt ut a dolores perspiciatis repellendus repellat aliquid magnam sint rem ipsum est",
    },
    {
      userId: 9,
      id: 88,
      title: "sapiente omnis fugit eos",
      body:
        "consequatur omnis est praesentium ducimus non iste neque hic deserunt voluptatibus veniam cum et rerum sed",
    },
    {
      userId: 9,
      id: 89,
      title: "sint soluta et vel magnam aut ut sed qui",
      body:
        "repellat aut aperiam totam temporibus autem et architecto magnam ut consequatur qui cupiditate rerum quia soluta dignissimos nihil iure tempore quas est",
    },
    {
      userId: 9,
      id: 90,
      title: "ad iusto omnis odit dolor voluptatibus",
      body:
        "minus omnis soluta quia qui sed adipisci voluptates illum ipsam voluptatem eligendi officia ut in eos soluta similique molestias praesentium blanditiis",
    },
    {
      userId: 10,
      id: 91,
      title: "aut amet sed",
      body:
        "libero voluptate eveniet aperiam sed sunt placeat suscipit molestias similique fugit nam natus expedita consequatur consequatur dolores quia eos et placeat",
    },
    {
      userId: 10,
      id: 92,
      title: "ratione ex tenetur perferendis",
      body:
        "aut et excepturi dicta laudantium sint rerum nihil laudantium et at a neque minima officia et similique libero et commodi voluptate qui",
    },
    {
      userId: 10,
      id: 93,
      title: "beatae soluta recusandae",
      body:
        "dolorem quibusdam ducimus consequuntur dicta aut quo laboriosam voluptatem quis enim recusandae ut sed sunt nostrum est odit totam sit error sed sunt eveniet provident qui nulla",
    },
    {
      userId: 10,
      id: 94,
      title: "qui qui voluptates illo iste minima",
      body:
        "aspernatur expedita soluta quo ab ut similique expedita dolores amet sed temporibus distinctio magnam saepe deleniti omnis facilis nam ipsum natus sint similique omnis",
    },
    {
      userId: 10,
      id: 95,
      title: "id minus libero illum nam ad officiis",
      body:
        "earum voluptatem facere provident blanditiis velit laboriosam pariatur accusamus odio saepe cumque dolor qui a dicta ab doloribus consequatur omnis corporis cupiditate eaque assumenda ad nesciunt",
    },
    {
      userId: 10,
      id: 96,
      title: "quaerat velit veniam amet cupiditate aut numquam ut sequi",
      body:
        "in non odio excepturi sint eum labore voluptates vitae quia qui et inventore itaque rerum veniam non exercitationem delectus aut",
    },
    {
      userId: 10,
      id: 97,
      title: "quas fugiat ut perspiciatis vero provident",
      body:
        "eum non blanditiis soluta porro quibusdam voluptas vel voluptatem qui placeat dolores qui velit aut vel inventore aut cumque culpa explicabo aliquid at perspiciatis est et voluptatem dignissimos dolor itaque sit nam",
    },
    {
      userId: 10,
      id: 98,
      title: "laboriosam dolor voluptates",
      body:
        "doloremque ex facilis sit sint culpa soluta assumenda eligendi non ut eius sequi ducimus vel quasi veritatis est dolores",
    },
    {
      userId: 10,
      id: 99,
      title: "temporibus sit alias delectus eligendi possimus magni",
      body:
        "quo deleniti praesentium dicta non quod aut est molestias molestias et officia quis nihil itaque dolorem quia",
    },
    {
      userId: 10,
      id: 100,
      title: "at nam consequatur ea labore ea harum",
      body:
        "cupiditate quo est a modi nesciunt soluta ipsa voluptas error itaque dicta in autem qui minus magnam et distinctio eum accusamus ratione error aut",
    },
  ],
};

const receptModules = handleActions({}, initialState);

export default receptModules;
