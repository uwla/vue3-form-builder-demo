export const model = {
    name: "john",
    email: "john@email.test",
    gender: "male",
    phone: "+1 999 9999-9999",
    fruits: ["banana", "avocado"],
    website: "http://example.test/",
    country: "Canada",
    agree: true,
    bio: "Commodo proident incididunt anim reprehenderit amet occaecat in exercitation fugiat minim reprehenderit irure voluptate ad.",
};

export const emptyModel = {
    name: "",
    email: "",
    gender: "",
    phone: "",
    fruits: [],
    website: "",
    country: "",
    agree: false,
    bio: "",
}

export const messages = {
    name: "god job",
    email: "awesome",
    gender: "god job",
    bio: "awesome",
    fruits: "god job",
    photo: "awesome",
    country: "god job",
    agree: "awesome",
    website: "god job",
    amount: "awesome job",
    birthday: "god job",
};

export const errors = {
    name: "Name must be longer.",
    email: "Email is required.",
    phone: "Phone is invalid.",
    website: "Website must be valid URL.",
    amount: "too much!",
    password: "Password must contain letters and numbers.",
    bio: "Bio cannot have more than 100 words.",
    gender: "Pick a gender",
    photo: [
        "Photo size must be below 2MB.",
        "Photo contains invalid dimensions.",
        "Supported formats are JPG or PNG.",
    ],
    fruits: "Choose at most 3 fruits",
    country: "Select a country.",
    agree: "We cannot procede without agreement.",
};

export const validation = {
    name: (val: any) => {
        if (val.length < 5) return "name must be longer";
        if (val.length > 20) return "name must be smaller";
        return true;
    },
    bio: (val: any) => {
        if (!val.includes("hello")) return 'bio must include the world "hello"';
        return true;
    },
    fruits: (val: any) => {
        if (val.length < 2) return "must choose at least 2 items!";
        return true;
    },
    agree: (val: any) => val,
};

export const fields1 = [
    "name:name|text|min=5|max=30",
    "name:email|email",
    "name:phone|tel|label:Phone number",
    "name:website|url|label:Personal website",
    "name:password|password|label:Choose your password",
    "name:birthday|date",
    "name:bio|textarea|label:Personal bio|rows=6",
    "name:gender|options:male,female",
    "name:photo|label:Profile picture|file",
    "name:fruits|stacked|checkboxes|options:apple,banana,orange,avocado",
    "name:country|stacked|options:United States,Mexico,Canada,Other",
    "name:agree|label:Agree to the terms and conditions|checkbox",
    "name:token|hidden|label:none|text",
    "component:vfb-buttons|label:none|class=block|submitText=SUBMIT|resetText=RESET",
];

export const fields2 = [
    // "name:name|text|min=5|max=30",
    // "name:email|email",
    // "name:phone|tel|label:Phone number",
    // "name:password|password|label:Choose your password",
    // "name:bio|textarea|label:Personal bio|rows=6",
    "name:date|component:Calendar|label:Choose a date:|dateFormat=MM dd, yy",
    {
        name: 'city',
        component: 'Dropdown',
        props: { options: ['New York', 'Dubai', 'Chicago', 'Moscou', 'Rio de Janeiro'] }
    },
    {
        name: 'rate',
        label: 'Rate me!',
        component: 'Rating',
        props: { cancel: false, stars: 5 },
    },
    "name:tags|label:Enter tags:|component:Chips",
    "name:color|label:Pick a color:|component:ColorPicker|class=color-picker",
    "component:vfb-buttons|label:none|class=block|submitText=SUBMIT|resetText=RESET",
];

export const fields3 = [
];
