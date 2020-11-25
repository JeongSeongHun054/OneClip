import { createAction, handleActions } from "redux-actions";

const DRAFTREMOVE = "draftWriting/REMOVE";

// export const remove = (id) => ({
//   type: REMOVE,
//   id,
// });

// function draftModules(state = initialState, action) {
//   switch (action.type) {
//     case REMOVE:
//       return {
//         ...state,
//         datas: state.datas.filter((data) => data.id !== action.id),
//       };
//     default:
//       return state;
//   }
// }

export const draftWritingRemove = createAction(DRAFTREMOVE, (id) => id);

const initialState = {
  datas: [
    {
      userId: 4,
      id: 36,
      title: "fuga nam accusamus voluptas reiciendis itaque",
      body:
        "ad mollitia et omnis minus architecto odit voluptas doloremque maxime aut non ipsa qui alias veniam blanditiis culpa aut quia nihil cumque facere et occaecati qui aspernatur quia eaque ut aperiam inventore",
    },
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
    {
      userId: 5,
      id: 47,
      title: "quibusdam cumque rem aut deserunt",
      body:
        "voluptatem assumenda ut qui ut cupiditate aut impedit veniam occaecati nemo illum voluptatem laudantium molestiae beatae rerum ea iure soluta nostrum eligendi et voluptate",
    },
    {
      userId: 5,
      id: 48,
      title: "ut voluptatem illum ea doloribus itaque eos",
      body:
        "voluptates quo voluptatem facilis iure occaecati vel assumenda rerum officia et illum perspiciatis ab deleniti laudantium repellat ad ut et autem reprehenderit",
    },
    {
      userId: 5,
      id: 49,
      title: "laborum non sunt aut ut assumenda perspiciatis voluptas",
      body:
        "inventore ab sint natus fugit id nulla sequi architecto nihil quaerat eos tenetur in in eum veritatis non quibusdam officiis aspernatur cumque aut commodi aut",
    },
    {
      userId: 5,
      id: 50,
      title:
        "repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem",
      body:
        "error suscipit maxime adipisci consequuntur recusandae voluptas eligendi et est et voluptates quia distinctio ab amet quaerat molestiae et vitae adipisci impedit sequi nesciunt quis consectetur",
    },
    {
      userId: 6,
      id: 51,
      title: "soluta aliquam aperiam consequatur illo quis voluptas",
      body:
        "sunt dolores aut doloribus dolore doloribus voluptates tempora et doloremque et quo cum asperiores sit consectetur dolorem",
    },
    {
      userId: 6,
      id: 52,
      title: "qui enim et consequuntur quia animi quis voluptate quibusdam",
      body:
        "iusto est quibusdam fuga quas quaerat molestias a enim ut sit accusamus enim temporibus iusto accusantium provident architecto soluta esse reprehenderit qui laborum",
    },
    {
      userId: 6,
      id: 53,
      title: "ut quo aut ducimus alias",
      body:
        "minima harum praesentium eum rerum illo dolore quasi exercitationem rerum nam porro quis neque quo consequatur minus dolor quidem veritatis sunt non explicabo similique",
    },
    {
      userId: 6,
      id: 54,
      title: "sit asperiores ipsam eveniet odio non quia",
      body:
        "totam corporis dignissimos vitae dolorem ut occaecati accusamus ex velit deserunt et exercitationem vero incidunt corrupti mollitia",
    },
    {
      userId: 6,
      id: 55,
      title: "sit vel voluptatem et non libero",
      body:
        "debitis excepturi ea perferendis harum libero optio eos accusamus cum fuga ut sapiente repudiandae et ut incidunt omnis molestiae nihil ut eum odit",
    },
    {
      userId: 6,
      id: 56,
      title: "qui et at rerum necessitatibus",
      body:
        "aut est omnis dolores neque rerum quod ea rerum velit pariatur beatae excepturi et provident voluptas corrupti corporis harum reprehenderit dolores eligendi",
    },
    {
      userId: 6,
      id: 57,
      title: "sed ab est est",
      body:
        "at pariatur consequuntur earum quidem quo est laudantium soluta voluptatem qui ullam et est et cum voluptas voluptatum repellat est",
    },
    {
      userId: 6,
      id: 58,
      title: "voluptatum itaque dolores nisi et quasi",
      body:
        "veniam voluptatum quae adipisci id et id quia eos ad et dolorem aliquam quo nisi sunt eos impedit error ad similique veniam",
    },
    {
      userId: 6,
      id: 59,
      title: "qui commodi dolor at maiores et quis id accusantium",
      body:
        "perspiciatis et quam ea autem temporibus non voluptatibus qui beatae a earum officia nesciunt dolores suscipit voluptas et animi doloribus cum rerum quas et magni et hic ut ut commodi expedita sunt",
    },
    {
      userId: 6,
      id: 60,
      title:
        "consequatur placeat omnis quisquam quia reprehenderit fugit veritatis facere",
      body:
        "asperiores sunt ab assumenda cumque modi velit qui esse omnis voluptate et fuga perferendis voluptas illo ratione amet aut et omnis",
    },
    {
      userId: 7,
      id: 61,
      title: "voluptatem doloribus consectetur est ut ducimus",
      body:
        "ab nemo optio odio delectus tenetur corporis similique nobis repellendus rerum omnis facilis vero blanditiis debitis in nesciunt doloribus dicta dolores magnam minus velit",
    },
    {
      userId: 7,
      id: 62,
      title: "beatae enim quia vel",
      body:
        "enim aspernatur illo distinctio quae praesentium beatae alias amet delectus qui voluptate distinctio odit sint accusantium autem omnis quo molestiae omnis ea eveniet optio",
    },
    {
      userId: 7,
      id: 63,
      title:
        "voluptas blanditiis repellendus animi ducimus error sapiente et suscipit",
      body:
        "enim adipisci aspernatur nemo numquam omnis facere dolorem dolor ex quis temporibus incidunt ab delectus culpa quo reprehenderit blanditiis asperiores accusantium ut quam in voluptatibus voluptas ipsam dicta",
    },
    {
      userId: 7,
      id: 64,
      title: "et fugit quas eum in in aperiam quod",
      body:
        "id velit blanditiis eum ea voluptatem molestiae sint occaecati est eos perspiciatis incidunt a error provident eaque aut aut qui",
    },
    {
      userId: 7,
      id: 65,
      title: "consequatur id enim sunt et et",
      body:
        "voluptatibus ex esse sint explicabo est aliquid cumque adipisci fuga repellat labore molestiae corrupti ex saepe at asperiores et perferendis natus id esse incidunt pariatur",
    },
    {
      userId: 7,
      id: 66,
      title: "repudiandae ea animi iusto",
      body:
        "officia veritatis tenetur vero qui itaque sint non ratione sed et ut asperiores iusto eos molestiae nostrum veritatis quibusdam et nemo iusto saepe",
    },
    {
      userId: 7,
      id: 67,
      title: "aliquid eos sed fuga est maxime repellendus",
      body:
        "reprehenderit id nostrum voluptas doloremque pariatur sint et accusantium quia quod aspernatur et fugiat amet non sapiente et consequatur necessitatibus molestiae",
    },
    {
      userId: 7,
      id: 68,
      title: "odio quis facere architecto reiciendis optio",
      body:
        "magnam molestiae perferendis quisquam qui cum reiciendis quaerat animi amet hic inventore ea quia deleniti quidem saepe porro velit",
    },
    {
      userId: 7,
      id: 69,
      title: "fugiat quod pariatur odit minima",
      body:
        "officiis error culpa consequatur modi asperiores et dolorum assumenda voluptas et vel qui aut vel rerum voluptatum quisquam perspiciatis quia rerum consequatur totam quas sequi commodi repudiandae asperiores et saepe a",
    },
    {
      userId: 7,
      id: 70,
      title: "voluptatem laborum magni",
      body:
        "sunt repellendus quae est asperiores aut deleniti esse accusamus repellendus quia aut quia dolorem unde eum tempora esse dolore",
    },
    {
      userId: 8,
      id: 71,
      title: "et iusto veniam et illum aut fuga",
      body:
        "occaecati a doloribus iste saepe consectetur placeat eum voluptate dolorem et qui quo quia voluptas rerum ut id enim velit est perferendis",
    },
    {
      userId: 8,
      id: 72,
      title: "sint hic doloribus consequatur eos non id",
      body:
        "quam occaecati qui deleniti consectetur consequatur aut facere quas exercitationem aliquam hic voluptas neque id sunt ut aut accusamus sunt consectetur expedita inventore velit",
    },
    {
      userId: 8,
      id: 73,
      title: "consequuntur deleniti eos quia temporibus ab aliquid at",
      body:
        "voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabo aut eum minima consequatur tempore cumque quae est et et in consequuntur voluptatem voluptates aut",
    },
    {
      userId: 8,
      id: 74,
      title: "enim unde ratione doloribus quas enim ut sit sapiente",
      body:
        "odit qui et et necessitatibus sint veniam mollitia amet doloremque molestiae commodi similique magnam et quam blanditiis est itaque quo et tenetur ratione occaecati molestiae tempora",
    },
    {
      userId: 8,
      id: 75,
      title: "dignissimos eum dolor ut enim et delectus in",
      body:
        "commodi non non omnis et voluptas sit autem aut nobis magnam et sapiente voluptatem et laborum repellat qui delectus facilis temporibus rerum amet et nemo voluptate expedita adipisci error dolorem",
    },
    {
      userId: 8,
      id: 76,
      title: "doloremque officiis ad et non perferendis",
      body:
        "ut animi facere totam iusto tempore molestiae eum aut et dolorem aperiam quaerat recusandae totam odio",
    },
    {
      userId: 8,
      id: 77,
      title: "necessitatibus quasi exercitationem odio",
      body:
        "modi ut in nulla repudiandae dolorum nostrum eos aut consequatur omnis ut incidunt est omnis iste et quam voluptates sapiente aliquam asperiores nobis amet corrupti repudiandae provident",
    },
    {
      userId: 8,
      id: 78,
      title: "quam voluptatibus rerum veritatis",
      body:
        "nobis facilis odit tempore cupiditate quia assumenda doloribus rerum qui ea illum et qui totam aut veniam repellendus",
    },
    {
      userId: 8,
      id: 79,
      title: "pariatur consequatur quia magnam autem omnis non amet",
      body:
        "libero accusantium et et facere incidunt sit dolorem non excepturi qui quia sed laudantium quisquam molestiae ducimus est officiis esse molestiae iste et quos",
    },
    {
      userId: 8,
      id: 80,
      title: "labore in ex et explicabo corporis aut quas",
      body:
        "ex quod dolorem ea eum iure qui provident amet quia qui facere excepturi et repudiandae asperiores molestias provident minus incidunt vero fugit rerum sint sunt excepturi provident",
    },
    {
      userId: 9,
      id: 81,
      title: "tempora rem veritatis voluptas quo dolores vero",
      body:
        "facere qui nesciunt est voluptatum voluptatem nisi sequi eligendi necessitatibus ea at rerum itaque harum non ratione velit laboriosam quis consequuntur ex officiis minima doloremque voluptas ut aut",
    },
    {
      userId: 9,
      id: 82,
      title: "laudantium voluptate suscipit sunt enim enim",
      body:
        "ut libero sit aut totam inventore sunt porro sint qui sunt molestiae consequatur cupiditate qui iste ducimus adipisci dolor enim assumenda soluta laboriosam amet iste delectus hic",
    },
    {
      userId: 9,
      id: 83,
      title: "odit et voluptates doloribus alias odio et",
      body:
        "est molestiae facilis quis tempora numquam nihil qui voluptate sapiente consequatur est qui necessitatibus autem aut ipsa aperiam modi dolore numquam reprehenderit eius rem quibusdam",
    },
    {
      userId: 9,
      id: 84,
      title:
        "optio ipsam molestias necessitatibus occaecati facilis veritatis dolores aut",
      body:
        "sint molestiae magni a et quos eaque et quasi ut rerum debitis similique veniam recusandae dignissimos dolor incidunt consequatur odio",
    },
    {
      userId: 9,
      id: 85,
      title: "dolore veritatis porro provident adipisci blanditiis et sunt",
      body:
        "similique sed nisi voluptas iusto omnis mollitia et quo assumenda suscipit officia magnam sint sed tempora enim provident pariatur praesentium atque animi amet ratione",
    },
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

const draftModules = handleActions(
  {
    [DRAFTREMOVE]: (state, action) => ({
      ...state,
      datas: state.datas.filter((data) => data.id !== action.payload),
    }),
  },
  initialState
);

export default draftModules;
