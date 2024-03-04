<template>
  <div class="o-igcse-section pb-4">
    <h3 class="mt-3 pt-5">O Level IGCSE Class</h3>
    <div class="rating">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
    </div>
    <img src="../assets/images/uk.gif" alt="" />
    <div class="d-flex justify-content-center align-items-center gap-5">
      <div class="class-info">
        <i class="fa-solid fa-clock me-2"></i>18 months
      </div>
      <div class="class-info">
        <i class="fa-solid fa-users"></i> 500 students enrolled
      </div>
    </div>
  </div>
  <hr />
  <div class="course-detail-section">
    <div class="row">
      <div class="col-lg-7 col-md-12 col-sm-12 col-12 p-sm-0">
        <div class="course-description">
          <h6>Description</h6>
          <p>
            O Level IGCSE (International General Certificate of Secondary
            Education) is an internationally recognized qualification for
            students typically aged 14 to 16. It is a rigorous academic program
            that serves as a benchmark for secondary education in various
            countries. The O Level IGCSE curriculum offers a broad range of
            subjects, including core subjects like Mathematics, English
            Language, and Sciences, as well as elective subjects such as
            History, Geography, Foreign Languages, and the Arts. The curriculum
            aims to provide students with a comprehensive and balanced
            education, emphasizing critical thinking, problem-solving, and
            practical application of knowledge.
          </p>
        </div>
        <div class="what-will-learn">
          <h6>You'll Learn About</h6>
          <ol>
            <li>
              Mathematics: O level igcse mathematics focuses on building
              fundamental mathematical skills, including number operations,
              algebra, geometry, and basic statistical analysis.
            </li>
            <li>
              English Language: The English curriculum emphasizes reading,
              writing, listening, and speaking skills. Students learn to analyze
              literature, develop writing techniques, improve comprehension, and
              enhance their communication abilities.
            </li>
            <li>
              Science: O level igcse science introduces students to the basic
              principles of physics, chemistry, and biology. They explore
              scientific concepts, perform experiments, develop critical
              thinking skills, and understand the natural world.
            </li>
            <li>
              Social Sciences: This subject covers a range of disciplines such
              as history, geography, economics, and civics. Students learn about
              different cultures, historical events, geographical features,
              economic systems, and political structures.
            </li>
            <li>
              Languages: O level igcse often includes the study of one or more
              foreign languages. Students develop reading, writing, listening,
              and speaking skills in these languages, enabling them to
              communicate effectively and appreciate diverse cultures.
            </li>
            <li>
              Humanities: This subject encompasses areas such as sociology,
              psychology, and philosophy. Students explore human behavior,
              societal structures, ethical considerations, and philosophical
              concepts.
            </li>
            <li>
              Information and Communication Technology (ICT): ICT education
              focuses on developing computer literacy, digital skills, and
              proficiency in using various software applications.
            </li>
          </ol>
        </div>
      </div>
      <div class="col-lg-5 col-md-12 col-sm-12 col-12 ps-5 table-header">
        <h6 class="text-center">TUTION FEES & FINANCIAL AIDS</h6>
        <div class="table-responsive">
          <table class="table table-sm table-striped">
            <tbody>
              <tr>
                <td>Registration Fees</td>
                <td>50,000 MMK</td>
              </tr>
              <tr>
                <td>Material Fees</td>
                <td>300,000 MMk</td>
              </tr>
              <tr>
                <td>Tution Fees</td>
                <td>5,400,000 MMk</td>
              </tr>
              <tr>
                <td colspan="2">&nbsp;</td>
              </tr>
              <tr>
                <td>Duration</td>
                <td>18 months (intensive class included)</td>
              </tr>
              <tr>
                <td class="text-nowrap">Avaliable Subjects</td>
                <td>
                  We offer 14 subjects. You can choose at least 6 subjects based
                  on your specialized major.
                </td>
              </tr>
              <tr>
                <td>Time-Table</td>
                <td>
                  2 days (or) 5 days per week <br />
                  9:00 AM to 3:30 PM
                </td>
              </tr>
            </tbody>
          </table>

          <p class="text-danger">
            *You can pay your tution fees by monthly.(300,000 MMK)*
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
  },
};
</script>

<style scoped>
.o-igcse-section {
  text-align: center;
  margin: 10px auto;
}
.o-igcse-section img {
  width: 400px;
  height: 250px;
  margin: 15px auto;
}
.class-info {
  font-size: 14px;
}
.rating i {
  color: #f2ca2f;
}
.course-detail-section {
  padding: 40px 15%;
}

.course-description h6 {
  margin: 40px auto 10px;
  font-size: 24px;
}
.course-description p {
  font-size: 16px;
  line-height: 30px;

  text-align: justify;
}
.what-will-learn ol > li {
  list-style: circle;

  font-size: 16px;
  line-height: 30px;
  margin-bottom: 10px;
}
table td,
.table-responsive p {
  font-size: 16px;
}
table td {
  text-align: left;
  line-height: 30px;
  padding-left: 30px;
}

.table-header h6 {
  font-size: 22px;
  margin: 30px auto;
}

@media (max-width: 1500px) {
  .class-info {
    font-size: 16px;
  }

  .course-detail-section {
    padding: 10px 9%;
  }

  .course-description p {
    font-size: 16px;
    line-height: 20px;
  }

  .what-will-learn ol > li,
  table ol > li {
    font-size: 16px;
    line-height: 30px;
  }
  .what-will-learn ul > li {
    font-size: 16px;
  }
  table td,
  table ol > li,
  .table-responsive p {
    font-size: 16px;
  }
  table td {
    line-height: 20px;
    text-align: left;
    padding: 10px 0px 10px 30px;
  }
}

@media (max-width: 990px) {
  .table-header {
    padding: 0 !important;
  }
}
@media (max-width: 450px) {
  .o-igcse-section img {
    width: 300px;
    height: 200px;
    margin: 15px auto;
  }
}
</style>
