// {
//     user(id: 1) {
//       id
//       firstName
//       age
//       company {
//         id
//         name
//         description
//       }
//     }
//     company(id: 1) {
//       id
//       name
//       description
//       users {
//         id
//         firstName
//         age
//       }  
//     }
//     Google: company(id: 2) {
//       ...CompanyDetails
//       ...UsersDetails
//     }
//     Apple: company(id: 1) {
//       ...CompanyDetails
//       ...UsersDetails
//     }
//   }
  
//   fragment CompanyDetails on Company {
//     id
//     name
//     description
//   }
  
//   fragment UsersDetails on Company {
//     users {
//         id
//       firstName
//       age
//     }
//   }
  