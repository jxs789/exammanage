import dynamic from 'dva/dynamic'

const AddQuestion = dynamic({
  component: () => import('../pages/main/question/addQuestion')
})
const QuestionType = dynamic({
  component: () => import('../pages/main/question/questionsType')
})
const WatchQuestion = dynamic({
  component: () => import('../pages/main/question/checkTheitem')
})
const AddUser = dynamic({
  component: () => import('../pages/main/user/addUser')
})
const ShowUser = dynamic({
  component: () => import('../pages/main/user/showUser')
})
const AddExam = dynamic({
  component: () => import('../pages/main/exam/addexam/addExam')
})
const ExamEdit = dynamic({
  component: () => import('../pages/main/exam/addexam/examEdit')
})
const ExamList = dynamic({
  component: () => import('../pages/main/exam/examList/eaxmList')
})
const ExamDetail = dynamic({
  component: () => import('../pages/main/exam/examList/examDetail')
})
const Grade = dynamic({
  component: () => import('../pages/main/classRoom/grade')
})
const Room = dynamic({
  component: () => import('../pages/main/classRoom/room')
})
const Student = dynamic({
  component: () => import('../pages/main/classRoom/student')
})
const ClassList = dynamic({
  component: () => import('../pages/main/checking/page/classList')
})
const TestPaper = dynamic({
  component: () => import('../pages/main/checking/page/testPaper')
})
const Exoprts = dynamic({
  component: () => import('../pages/main/exports/index')
})
const Questions = dynamic({
  component: () => import('../pages/main/question/questions/questions')
})


export default {
  routes: [
    {
      name: "router.questions",
      path: "",
      children: [
        {
          view_id: "main-addQuestions",
          name: "router.questions.add",
          path: "/main/addquestion",
          component: AddQuestion
        }, {
          view_id: "main-questionsType",
          name: "router.questions.type",
          path: "/main/questiontype",
          component: QuestionType
        }, {
          view_id: "main-watchQuestions",
          name: "router.questions.view",
          path: "/main/watchquestion",
          component: WatchQuestion
        },
        {
          name: "",
          path: "/main/questions/:id",
          component: Questions,
          view_id: "main-questionsDetail"
        }
      ]
    },
    {
      name: "router.user",
      path: "",
      children: [
        {
          view_id: "main-addUser",
          name: "router.user.add",
          path: "/main/adduser",
          component: AddUser
        }, {
          view_id: "main-showUser",
          name: "router.user.show",
          path: "/main/showuser",
          component: ShowUser
        }
      ]
    },
    {
      name: "router.exam",
      path: "",
      children: [
        {
          view_id: "main-addExam",
          name: "router.exam.add",
          path: "/main/addexam",
          component: AddExam
        }, {
          view_id: "main-menu",
          name: "router.exam.list",
          path: "/main/examlist",
          component: ExamList
        },
        {
          view_id: "main-examEdit",
          name: "",
          path: "/main/examEdit",
          component: ExamEdit
        }
        ,
        {
          view_id: "main-examDetail",
          name: "",
          path: "/main/examDetail",
          component: ExamDetail
        }

      ]
    }, {
      name: "router.classroom",
      path: "",
      children: [
        {
          view_id: "main-grade",
          name: "router.classroom.class",
          path: "/main/grade",
          component: Grade
        }, {
          view_id: "main-room",
          name: "router.classroom.management",
          path: "/main/room",
          component: Room
        }, {
          view_id: "main-student",
          name: "router.classroom.student",
          path: "/main/student",
          component: Student
        }
      ]
    },
    {
      name: "router.examination",
      path: "",
      children: [
        {
          view_id: "main-examPaperClassList",
          name: "router.examination.class",
          path: "/main/page/classList",
          component: ClassList,
        },
        {
          view_id: "main-examPaperClassmate",
          name: "",
          path: "/main/page/testPaper",
          component: TestPaper,
        },
        {
          view_id: "main-examPaperClassList",
          name: "router.exports",
          path: "/main/exports",
          component: Exoprts,
        }
      ]
    },
  ]
}

