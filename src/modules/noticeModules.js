import { createAction, handleActions } from "redux-actions";

const NOTICE_REMOVE = "getMail/REMOVE";

export const noticeRemove = createAction(NOTICE_REMOVE, (id) => id);

const initialState = {
  datas: [
    {
      userId: 4,
      id: 37,
      title: "provident vel ut sit ratione est",
      body:
        "debitis et eaque non officia sed nesciunt pariatur vel voluptatem iste vero et ea numquam aut expedita ipsum nulla in voluptates omnis consequatur aut enim officiis in quam qui",
    },
    {
      userId: 4,
      id: 38,
      title: "explicabo et eos deleniti nostrum ab id repellendus",
      body:
        "animi esse sit aut sit nesciunt assumenda eum voluptas quia voluptatibus provident quia necessitatibus ea rerum repudiandae quia voluptatem delectus fugit aut id quia ratione optio eos iusto veniam iure",
    },
    {
      userId: 4,
      id: 39,
      title: "eos dolorem iste accusantium est eaque quam",
      body:
        "corporis rerum ducimus vel eum accusantium maxime aspernatur a porro possimus iste omnis est in deleniti asperiores fuga aut voluptas sapiente vel dolore minus voluptatem incidunt ex",
    },
    {
      userId: 4,
      id: 40,
      title: "enim quo cumque",
      body:
        "ut voluptatum aliquid illo tenetur nemo sequi quo facilis ipsum rem optio mollitia quas voluptatem eum voluptas qui unde omnis voluptatem iure quasi maxime voluptas nam",
    },
    {
      userId: 5,
      id: 41,
      title: "non est facere",
      body:
        "molestias id nostrum excepturi molestiae dolore omnis repellendus quaerat saepe consectetur iste quaerat tenetur asperiores accusamus ex ut nam quidem est ducimus sunt debitis saepe",
    },
    {
      userId: 5,
      id: 42,
      title:
        "commodi ullam sint et excepturi error explicabo praesentium voluptas",
      body:
        "odio fugit voluptatum ducimus earum autem est incidunt voluptatem odit reiciendis aliquam sunt sequi nulla dolorem non facere repellendus voluptates quia ratione harum vitae ut",
    },
    {
      userId: 5,
      id: 43,
      title:
        "eligendi iste nostrum consequuntur adipisci praesentium sit beatae perferendis",
      body:
        "similique fugit est illum et dolorum harum et voluptate eaque quidem exercitationem quos nam commodi possimus cum odio nihil nulla dolorum exercitationem magnam ex et a et distinctio debitis",
    },
    {
      userId: 5,
      id: 44,
      title: "optio dolor molestias sit",
      body:
        "temporibus est consectetur dolore et libero debitis vel velit laboriosam quia ipsum quibusdam qui itaque fuga rem aut ea et iure quam sed maxime ut distinctio quae",
    },
    {
      userId: 5,
      id: 45,
      title: "ut numquam possimus omnis eius suscipit laudantium iure",
      body:
        "est natus reiciendis nihil possimus aut provident ex et dolor repellat pariatur est nobis rerum repellendus dolorem autem",
    },
    {
      userId: 5,
      id: 46,
      title: "aut quo modi neque nostrum ducimus",
      body:
        "voluptatem quisquam iste voluptatibus natus officiis facilis dolorem quis quas ipsam vel et voluptatum in aliquid",
    },
    ,
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

const noticeModules = handleActions(
  {
    [NOTICE_REMOVE]: (state, action) => ({
      ...state,
      datas: state.datas.filter((data) => data.id !== action.payload),
    }),
  },
  initialState
);

export default noticeModules;
