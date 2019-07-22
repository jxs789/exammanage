import AddQuestion from "../pages/main/question/addQuestion"
import QuestionType from "../pages/main/question/questionsType"
import WatchQuestion from "../pages/main/question/checkTheitem"
import AddUser from "../pages/main/user/addUser"
import ShowUser from "../pages/main/user/showUser"
import AddExam from "../pages/main/exam/addexam/addExam"
import ExamEdit from "../pages/main/exam/addexam/examEdit"
import ExamList from "../pages/main/exam/examList/eaxmList"
import ExamDetail from "../pages/main/exam/examList/examDetail"
import Grade from "../pages/main/classRoom/grade"
import Room from "../pages/main/classRoom/room"
import Student from "../pages/main/classRoom/student"
import ClassList from "../pages/main/checking/page/classList";
import Page from '../pages/main/checking/page';
import TestPaper from "../pages/main/checking/page/testPaper";
import Exoprts from "../pages/main/exports/index"
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