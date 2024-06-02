import LocalizedStrings from "react-localization";

const strings = new LocalizedStrings({
  en: {
    status: "Status",
    accept: "Accept",
    reject: "Reject",
    days: [
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    signIn: "Sign in",
    to: "to",
    appName: "Nage7",
    email: "Email",
    password: "Password",
    loading: "Loading...",
    enterEmail: "Enter your email address",
    send: "Send",
    students: "Students",
    attendance: "Attendance",
    enterNewPassword: "Enter your new password",
    confirmPassword: "Confirm password",
    submit: "Submit",
    enterSendCode: "Enter the code sent to your email",
    addStudent: "Add Student",
    addAssistant: "Add Assistant",
    addGroup: "Add Group",
    addLesson: "Add Lesson",
    addAttendance: "Add Attendance",
    editStudent: "Edit Student",
    editAssistant: "Edit Assistant",
    editGroup: "Edit Group",
    editLesson: "Edit Lesson",
    lesson: "Lesson",
    date: "Date",
    edit: "Edit",
    code: "Code",
    examType: {
      EXAM: "Exam",
      HOME_WORK: "Homework",
      OFFLINE_EXAM: "Offline Exam",
    },
    CheckboxSelection: "CheckboxSelection",
    Columns: "Columns",
    Filters: "Filters",
    Density: "Density",
    FindColumn: "Find Column",
    ShowAll: "Show All",
    HideAll: "Hide All",
    ColumnTitle: "Column Title",
    FilterValue: "Filter Value",
    Value: "Value",
    Contains: "Contains",
    RowsPerPage: "Rows Per Page",
    StudentName: "Student Name",
    StudentLevel: "Student Level",
    level: "Level",
    subLevel: "Sub-level",
    group: "Group",
    groups: "Groups",
    groupPrice: "Group Price",
    schoolName: "School Name",
    subject: "Subject",
    daysPerWeek: "Days per week",
    lessonDays: "Days",
    phone: "Phone Number",
    parentNumber: "Parent Phone Number",
    actions: "Actions",
    name: "Name",
    imgProfile: "Profile Image",
    add: "Add",
    nickName: "Nick Name",
    gender: "Gender",
    userName: "User Name",
    phone2: "Phone Number 2",
    male: "Male",
    female: "Female",
    selectBirthDate: "Select Birth Date",
    deleteUser: "Are you sure you want to delete this user?",
    deleteConfirm: "Are you sure you want to delete?",
    delete: "Delete",
    deleteSuccess: "deleted successfully",
    noData: "No Data",
    basicInfo: "Basic Info",
    subscriptions: "Subscriptions",
    packages: "Packages",
    teacher: "Teacher",
    birthDate: "Birth Date",
    addSubscriptions: "Add Subscriptions",
    thereIsNoSubscriptions: "There is no subscriptions",
    selectSubscription: "Select Subscription",
    subscriptionRequired: "Subscription is required",
    noSubscriptions: "No subscriptions",
    addedSubscriptionSuccessfully: "Subscription added successfully",
    selectedPlan: "Selected Plan",
    price: "Price",
    paymentType: "Payment Type",
    features: "Features",
    subscriptionEndDate: "Subscription End Date",
    cash: "Cash",
    visa: "Visa",
    master: "Master",
    state: "State",
    statusChangedSuccessfully: "Status changed successfully",
  },
  ar: {
    status: "الحالة",
    accept: "موافق",
    reject: "رفض",
    days: [
      "السبت",
      "الأحد",
      "الإثنين",
      "الثلاثاء",
      "الأربعاء",
      "الخميس",
      "الجمعة",
    ],
    signIn: "تسجيل الدخول",
    to: "الى",
    appName: "ناجح",
    email: "البريد الالكتروني",
    password: "كلمة المرور",
    enterEmail: "أدخل عنوان بريدك الإلكتروني",
    send: "إرسال",
    students: "الطلاب",
    attendance: "الحضور",
    enterNewPassword: "أدخل كلمة المرور الجديدة",
    confirmPassword: "تأكيد كلمة المرور",
    submit: "إرسال",
    enterSendCode: "أدخل الرمز المرسل إلى بريدك الإلكتروني",
    addStudent: "إضافة طالب",
    addAssistant: "إضافة مساعد",
    addGroup: "إضافة مجموعة",
    addLesson: "إضافة درس",
    addAttendance: "إضافة حضور",
    editStudent: "تعديل الطالب",
    editAssistant: "تعديل المساعد",
    editGroup: "تعديل المجموعة",
    editLesson: "تعديل الدرس",
    lesson: "الدرس",
    date: "التاريخ",
    edit: "تعديل",
    loading: "جاري التحميل...",
    code: "الكود",
    examType: {
      EXAM: "امتحان",
      HOME_WORK: "واجب",
      OFFLINE_EXAM: "امتحان أوفلاين",
    },
    CheckboxSelection: "اختيار الخانة",
    Columns: "الاعمدة",
    Filters: "الفلاتر",
    Density: "الكثافة",
    FindColumn: "ابحث عن عمود",
    ShowAll: "اظهر الكل",
    HideAll: "اخفي الكل",
    ColumnTitle: "عنوان العمود",
    FilterValue: "قيمة الفلتر",
    Value: "القيمة",
    Contains: "يحتوي",
    RowsPerPage: "عدد الصفوف في كل صفحة",
    StudentName: "اسم الطالب",
    StudentLevel: "مستوى الطالب",
    level: "المستوى",
    subLevel: "المستوى الفرعي",
    group: "المجموعة",
    groups: "المجموعات",
    groupPrice: "سعر المجموعة",
    schoolName: "اسم المدرسة",
    subject: "المادة",
    daysPerWeek: "عدد الأيام بالأسبوع",
    lessonDays: "الأيام",
    phone: "رقم الهاتف",
    parentNumber: "رقم هاتف ولي الأمر",
    actions: "الاجراءات",
    name: "الاسم",
    imgProfile: "صورة الملف الشخصي",
    add: "اضافة",
    nickName: "الاسم المستعار",
    gender: "النوع",
    userName: "اسم المستخدم",
    phone2: "رقم الهاتف 2",
    male: "ذكر",
    female: "انثى",
    selectBirthDate: "اختر تاريخ الميلاد",
    deleteUser: "هل انت متأكد من حذف هذا المستخدم؟",
    deleteConfirm: "هل انت متأكد من الحذف؟",
    delete: "حذف",
    deleteSuccess: "تم الحذف بنجاح",
    noData: "لا يوجد بيانات",
    basicInfo: "المعلومات الاساسية",
    subscriptions: "الاشتراكات",
    packages: "الباقات",
    teacher: "المدرس",
    birthDate: "تاريخ الميلاد",
    addSubscriptions: "اضافة اشتراك",
    thereIsNoSubscriptions: "لا يوجد اشتراكات",
    selectSubscription: "اختر اشتراك",
    subscriptionRequired: "الاشتراك مطلوب",
    noSubscriptions: "لا يوجد اشتراكات",
    addedSubscriptionSuccessfully: "تم اضافة الاشتراك بنجاح",
    selectedPlan: "الباقة المختارة",
    price: "السعر",
    paymentType: "طريقة الدفع",
    features: "المميزات",
    subscriptionEndDate: "تاريخ انتهاء الاشتراك",
    cash: "كاش",
    visa: "فيزا",
    master: "ماستر كارد",
    state: "الحالة",
    statusChangedSuccessfully: "تم تغيير الحالة بنجاح",
  },
});

export default strings;
