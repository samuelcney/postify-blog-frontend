```
Directory structure:
└── samuelcney-postify-blog-frontend/
    ├── README.md
    ├── next.config.ts
    ├── package.json
    ├── postcss.config.mjs
    ├── tailwind.config.ts
    ├── tsconfig.json
    └── src/
        ├── app/
        │   ├── globals.css
        │   ├── layout.tsx
        │   └── page.tsx
        ├── components/
        │   ├── Feed/
        │   │   ├── FeedContent.tsx
        │   │   ├── FeedRoot.tsx
        │   │   └── index.ts
        │   ├── Icon/
        │   │   └── Icon.tsx
        │   ├── Login/
        │   │   ├── LoginRoot.tsx
        │   │   └── index.ts
        │   ├── Post/
        │   │   ├── PostItem.tsx
        │   │   └── PostItemList.tsx
        │   └── Sidebar/
        │       ├── LeftSideBar.tsx
        │       ├── SideBarContent.tsx
        │       ├── SideBarHeader.tsx
        │       ├── SideBarItem.tsx
        │       ├── SideBarRoot.tsx
        │       └── index.ts
        ├── hooks/
        │   └── post/
        │       └── usePost.ts
        └── services/
            ├── axios/
            │   └── axiosInstance.ts
            └── post/
                └── postService.ts
```
