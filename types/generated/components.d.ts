import type { Schema, Attribute } from '@strapi/strapi';

export interface Common10thClassInfoComponent extends Schema.Component {
  collectionName: 'components_common_10th_class_info_components';
  info: {
    displayName: '10th_class info_component';
    description: '';
  };
  attributes: {
    schoolName: Attribute.String;
    city: Attribute.String;
    passingYear: Attribute.String;
    gradingSystem: Attribute.String;
    grade: Attribute.String;
    board: Attribute.String;
  };
}

export interface Common12ThClassInfoComponent extends Schema.Component {
  collectionName: 'components_common_12th_class_info_components';
  info: {
    displayName: '12th_class_info_component';
    description: '';
  };
  attributes: {
    schoolName: Attribute.String;
    city: Attribute.String;
    passingYear: Attribute.String;
    gradingSystem: Attribute.String;
    grade: Attribute.String;
    board: Attribute.String;
    stream: Attribute.String;
  };
}

export interface CommonAddSpecializations extends Schema.Component {
  collectionName: 'components_common_add_specializations';
  info: {
    displayName: 'add_specializations';
    icon: 'apps';
  };
  attributes: {};
}

export interface CommonApplicationDate extends Schema.Component {
  collectionName: 'components_common_application_dates';
  info: {
    displayName: 'application_date';
    icon: 'apps';
  };
  attributes: {
    start_date: Attribute.Date;
    end_date: Attribute.Date;
  };
}

export interface CommonApplicationStatusComponent extends Schema.Component {
  collectionName: 'components_common_application_status_components';
  info: {
    displayName: 'Application_Status_Component';
    icon: 'apps';
  };
  attributes: {
    step_name: Attribute.String;
  };
}

export interface CommonArtical extends Schema.Component {
  collectionName: 'components_common_articals';
  info: {
    displayName: 'artical';
    icon: 'expand';
  };
  attributes: {
    image: Attribute.Media;
    publish_date: Attribute.Date;
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    sub_title: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
  };
}

export interface CommonAwards extends Schema.Component {
  collectionName: 'components_common_awards';
  info: {
    displayName: 'awards';
    icon: 'collapse';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface CommonBannerComponent extends Schema.Component {
  collectionName: 'components_common_banner_components';
  info: {
    displayName: 'banner_component';
    icon: 'apps';
    description: '';
  };
  attributes: {
    heading: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    button_text: Attribute.String;
    section: Attribute.Relation<
      'common.banner-component',
      'oneToMany',
      'api::navbar.navbar'
    >;
  };
}

export interface CommonButtonType extends Schema.Component {
  collectionName: 'components_common_button_types';
  info: {
    displayName: 'button_type';
  };
  attributes: {
    button_title: Attribute.String;
    button_link: Attribute.String;
  };
}

export interface CommonCareersComponent extends Schema.Component {
  collectionName: 'components_common_careers_components';
  info: {
    displayName: 'careers_component';
    icon: 'apps';
  };
  attributes: {
    heading: Attribute.String;
    sections: Attribute.Relation<
      'common.careers-component',
      'oneToMany',
      'api::navbar.navbar'
    >;
  };
}

export interface CommonCareers extends Schema.Component {
  collectionName: 'components_common_careers';
  info: {
    displayName: 'Careers';
  };
  attributes: {
    heading: Attribute.String;
    section: Attribute.Relation<
      'common.careers',
      'oneToMany',
      'api::navbar.navbar'
    >;
  };
}

export interface CommonCollegesComponent extends Schema.Component {
  collectionName: 'components_common_colleges_components';
  info: {
    displayName: 'colleges_component';
    icon: 'apps';
  };
  attributes: {
    heading: Attribute.String;
    section: Attribute.Relation<
      'common.colleges-component',
      'oneToMany',
      'api::navbar.navbar'
    >;
  };
}

export interface CommonColleges extends Schema.Component {
  collectionName: 'components_common_colleges';
  info: {
    displayName: 'Colleges';
  };
  attributes: {
    heading: Attribute.String;
    section: Attribute.Relation<
      'common.colleges',
      'oneToMany',
      'api::navbar.navbar'
    >;
  };
}

export interface CommonCompareComponent extends Schema.Component {
  collectionName: 'components_common_compare_components';
  info: {
    displayName: 'compare_component';
    icon: 'apps';
    description: '';
  };
  attributes: {
    section: Attribute.Relation<
      'common.compare-component',
      'oneToMany',
      'api::navbar.navbar'
    >;
    heading: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface CommonCoueses extends Schema.Component {
  collectionName: 'components_common_coueses';
  info: {
    displayName: 'coueses';
    icon: 'apps';
  };
  attributes: {
    courses_name: Attribute.Relation<
      'common.coueses',
      'oneToMany',
      'api::course.course'
    >;
    fee_amount: Attribute.Decimal;
    fee_label: Attribute.String;
  };
}

export interface CommonCountriesComponent extends Schema.Component {
  collectionName: 'components_common_countries_components';
  info: {
    displayName: 'countries_component';
    icon: 'apps';
  };
  attributes: {
    heading: Attribute.String;
    section: Attribute.Relation<
      'common.countries-component',
      'oneToMany',
      'api::navbar.navbar'
    >;
  };
}

export interface CommonCourseComponent extends Schema.Component {
  collectionName: 'components_common_course_components';
  info: {
    displayName: 'course_component';
    icon: 'apps';
    description: '';
  };
  attributes: {
    heading: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    section: Attribute.Relation<
      'common.course-component',
      'oneToMany',
      'api::navbar.navbar'
    >;
  };
}

export interface CommonCoursesComponent extends Schema.Component {
  collectionName: 'components_common_courses_components';
  info: {
    displayName: 'courses_component';
    icon: 'apps';
  };
  attributes: {
    heading: Attribute.String;
    section: Attribute.Relation<
      'common.courses-component',
      'oneToMany',
      'api::navbar.navbar'
    >;
  };
}

export interface CommonCourses extends Schema.Component {
  collectionName: 'components_common_courses';
  info: {
    displayName: 'Courses';
  };
  attributes: {
    heading: Attribute.String;
    section: Attribute.Relation<
      'common.courses',
      'oneToMany',
      'api::navbar.navbar'
    >;
  };
}

export interface CommonDepartmentComponent extends Schema.Component {
  collectionName: 'components_common_department_components';
  info: {
    displayName: 'department_component';
    icon: 'apps';
    description: '';
  };
  attributes: {
    section: Attribute.Relation<
      'common.department-component',
      'oneToMany',
      'api::navbar.navbar'
    >;
    courses: Attribute.Component<'common.coueses', true>;
    heading: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
  };
}

export interface CommonDiscussionForumReply extends Schema.Component {
  collectionName: 'components_common_discussion_forum_replies';
  info: {
    displayName: 'discussion_forum_reply';
    icon: 'apps';
    description: '';
  };
  attributes: {
    replied_at: Attribute.Date;
    reply_description: Attribute.Text;
    replied_by: Attribute.Relation<
      'common.discussion-forum-reply',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    likes: Attribute.Relation<
      'common.discussion-forum-reply',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    dislikes: Attribute.Relation<
      'common.discussion-forum-reply',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface CommonDiscussionForum extends Schema.Component {
  collectionName: 'components_common_discussion_forums';
  info: {
    displayName: 'discussion_forum';
    icon: 'apps';
    description: '';
  };
  attributes: {
    section: Attribute.Relation<
      'common.discussion-forum',
      'oneToMany',
      'api::navbar.navbar'
    >;
    heading: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface CommonDislikes extends Schema.Component {
  collectionName: 'components_common_dislikes';
  info: {
    displayName: 'dislikes';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface CommonEmailComponent extends Schema.Component {
  collectionName: 'components_common_email_components';
  info: {
    displayName: 'email_component';
  };
  attributes: {
    heading: Attribute.String;
  };
}

export interface CommonExamsComponent extends Schema.Component {
  collectionName: 'components_common_exams_components';
  info: {
    displayName: 'exams_component';
    icon: 'apps';
  };
  attributes: {
    heading: Attribute.String;
    section: Attribute.Relation<
      'common.exams-component',
      'oneToMany',
      'api::navbar.navbar'
    >;
  };
}

export interface CommonExams extends Schema.Component {
  collectionName: 'components_common_exams';
  info: {
    displayName: 'Exams';
  };
  attributes: {
    heading: Attribute.String;
    section: Attribute.Relation<
      'common.exams',
      'oneToMany',
      'api::navbar.navbar'
    >;
  };
}

export interface CommonExmDate extends Schema.Component {
  collectionName: 'components_common_exm_dates';
  info: {
    displayName: 'exm_date';
    icon: 'apps';
  };
  attributes: {
    start_date: Attribute.Date;
    end_date: Attribute.Date;
  };
}

export interface CommonFaq extends Schema.Component {
  collectionName: 'components_common_faqs';
  info: {
    displayName: 'FAQ';
    description: '';
  };
  attributes: {
    questions: Attribute.Component<'faq.faq-elements', true>;
    section: Attribute.Relation<'common.faq', 'oneToOne', 'api::navbar.navbar'>;
    heading: Attribute.String;
  };
}

export interface CommonFillExamsComponent extends Schema.Component {
  collectionName: 'components_common_fill_exams_components';
  info: {
    displayName: 'fill_exams_component';
  };
  attributes: {
    heading: Attribute.String;
  };
}

export interface CommonFilledExams extends Schema.Component {
  collectionName: 'components_common_filled_exams';
  info: {
    displayName: 'filled_exams';
    icon: 'apps';
  };
  attributes: {
    exam_name: Attribute.String;
    score: Attribute.String;
    booked_date: Attribute.String;
  };
}

export interface CommonFormStape extends Schema.Component {
  collectionName: 'components_common_form_stapes';
  info: {
    displayName: 'form_stape';
    icon: 'cog';
    description: '';
  };
  attributes: {
    field: Attribute.Component<'common.user', true>;
    step_label: Attribute.String;
    step_banner: Attribute.Media;
    step_heading: Attribute.String;
    step_description: Attribute.Component<'common.step-description', true>;
  };
}

export interface CommonGallery extends Schema.Component {
  collectionName: 'components_common_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    section: Attribute.Relation<
      'common.gallery',
      'oneToOne',
      'api::navbar.navbar'
    >;
    heading: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
  };
}

export interface CommonGoogleAds extends Schema.Component {
  collectionName: 'components_common_google_ads';
  info: {
    displayName: 'GoogleAds';
    description: '';
  };
  attributes: {
    section: Attribute.String;
  };
}

export interface CommonGraduationInfoComponent extends Schema.Component {
  collectionName: 'components_common_graduation_info_components';
  info: {
    displayName: 'graduation_info_component';
    description: '';
  };
  attributes: {
    institutionName: Attribute.String;
    passingYear: Attribute.String;
    gradingSystem: Attribute.String;
    grade: Attribute.String;
    course: Attribute.String;
  };
}

export interface CommonJeeRankPredictor extends Schema.Component {
  collectionName: 'components_common_jee_rank_predictors';
  info: {
    displayName: 'JEE_Rank_Predictor';
    icon: 'apps';
  };
  attributes: {
    heading: Attribute.String;
    section: Attribute.Relation<
      'common.jee-rank-predictor',
      'oneToMany',
      'api::navbar.navbar'
    >;
  };
}

export interface CommonLikes extends Schema.Component {
  collectionName: 'components_common_likes';
  info: {
    displayName: 'likes';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface CommonLongTextComponent extends Schema.Component {
  collectionName: 'components_common_long_text_components';
  info: {
    displayName: 'long_text_component';
  };
  attributes: {
    heading: Attribute.String;
  };
}

export interface CommonNavBar extends Schema.Component {
  collectionName: 'components_common_nav_bars';
  info: {
    displayName: 'nav_bar';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface CommonNavItem extends Schema.Component {
  collectionName: 'components_common_nav_items';
  info: {
    displayName: 'nav_item';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface CommonNav extends Schema.Component {
  collectionName: 'components_common_navs';
  info: {
    displayName: 'Nav';
    icon: 'command';
    description: '';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface CommonNavbar extends Schema.Component {
  collectionName: 'components_common_navbars';
  info: {
    displayName: 'navbar';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    nav_item: Attribute.Component<'common.nav-item', true>;
  };
}

export interface CommonNeetRankPredictor extends Schema.Component {
  collectionName: 'components_common_neet_rank_predictors';
  info: {
    displayName: 'NEET_Rank_Predictor';
    icon: 'apps';
  };
  attributes: {
    heading: Attribute.String;
    section: Attribute.Relation<
      'common.neet-rank-predictor',
      'oneToMany',
      'api::navbar.navbar'
    >;
  };
}

export interface CommonNewOverview extends Schema.Component {
  collectionName: 'components_common_new_overviews';
  info: {
    displayName: 'new_overview';
    description: '';
  };
  attributes: {
    Content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    section: Attribute.Relation<
      'common.new-overview',
      'oneToOne',
      'api::navbar.navbar'
    >;
    heading: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
  };
}

export interface CommonNewpaper extends Schema.Component {
  collectionName: 'components_common_newpapers';
  info: {
    displayName: 'Newpaper';
    icon: 'collapse';
  };
  attributes: {
    Image: Attribute.Media;
    heading: Attribute.String;
  };
}

export interface CommonNewsAndUpdate extends Schema.Component {
  collectionName: 'components_common_news_and_updates';
  info: {
    displayName: 'news_and_update';
    icon: 'apps';
    description: '';
  };
  attributes: {
    sections: Attribute.Relation<
      'common.news-and-update',
      'oneToMany',
      'api::navbar.navbar'
    >;
  };
}

export interface CommonPhoneNumberComponent extends Schema.Component {
  collectionName: 'components_common_phone_number_components';
  info: {
    displayName: 'phone_number_component';
  };
  attributes: {
    heading: Attribute.String;
  };
}

export interface CommonPointers extends Schema.Component {
  collectionName: 'components_common_pointers';
  info: {
    displayName: 'pointers';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
  };
}

export interface CommonRatingAndReview extends Schema.Component {
  collectionName: 'components_common_rating_and_reviews';
  info: {
    displayName: 'rating_and_review';
    icon: 'apps';
    description: '';
  };
  attributes: {
    section: Attribute.Relation<
      'common.rating-and-review',
      'oneToMany',
      'api::navbar.navbar'
    >;
  };
}

export interface CommonRecommendedCareers extends Schema.Component {
  collectionName: 'components_common_recommended_careers';
  info: {
    displayName: 'recommended_careers';
    icon: 'apps';
  };
  attributes: {
    careers: Attribute.Relation<
      'common.recommended-careers',
      'oneToMany',
      'api::career.career'
    >;
    navbars: Attribute.Relation<
      'common.recommended-careers',
      'oneToMany',
      'api::navbar.navbar'
    >;
  };
}

export interface CommonRecommendedColleges extends Schema.Component {
  collectionName: 'components_common_recommended_colleges';
  info: {
    displayName: 'recommended_colleges';
    icon: 'apps';
    description: '';
  };
  attributes: {
    colleges: Attribute.Relation<
      'common.recommended-colleges',
      'oneToMany',
      'api::college.college'
    >;
    section: Attribute.Relation<
      'common.recommended-colleges',
      'oneToMany',
      'api::navbar.navbar'
    >;
  };
}

export interface CommonRecommendedCountries extends Schema.Component {
  collectionName: 'components_common_recommended_countries';
  info: {
    displayName: 'recommended_countries';
    icon: 'apps';
  };
  attributes: {
    countries: Attribute.Relation<
      'common.recommended-countries',
      'oneToMany',
      'api::country.country'
    >;
    section: Attribute.Relation<
      'common.recommended-countries',
      'oneToMany',
      'api::navbar.navbar'
    >;
  };
}

export interface CommonRecommendedCourses extends Schema.Component {
  collectionName: 'components_common_recommended_courses';
  info: {
    displayName: 'recommended_courses';
    icon: 'apps';
  };
  attributes: {
    courses: Attribute.Relation<
      'common.recommended-courses',
      'oneToMany',
      'api::course.course'
    >;
    section: Attribute.Relation<
      'common.recommended-courses',
      'oneToMany',
      'api::navbar.navbar'
    >;
  };
}

export interface CommonRecommendedExams extends Schema.Component {
  collectionName: 'components_common_recommended_exams';
  info: {
    displayName: 'recommended_exams';
    icon: 'apps';
  };
  attributes: {
    exams: Attribute.Relation<
      'common.recommended-exams',
      'oneToMany',
      'api::exam.exam'
    >;
    section: Attribute.Relation<
      'common.recommended-exams',
      'oneToMany',
      'api::navbar.navbar'
    >;
  };
}

export interface CommonRecommendedScholarships extends Schema.Component {
  collectionName: 'components_common_recommended_scholarships';
  info: {
    displayName: 'recommended_scholarships';
    icon: 'apps';
  };
  attributes: {
    scholarships: Attribute.Relation<
      'common.recommended-scholarships',
      'oneToMany',
      'api::scholarship.scholarship'
    >;
    navbars: Attribute.Relation<
      'common.recommended-scholarships',
      'oneToMany',
      'api::navbar.navbar'
    >;
  };
}

export interface CommonResultDate extends Schema.Component {
  collectionName: 'components_common_result_dates';
  info: {
    displayName: 'result_date';
    icon: 'apps';
  };
  attributes: {
    start_date: Attribute.Date;
    end_date: Attribute.Date;
  };
}

export interface CommonReviewComponent extends Schema.Component {
  collectionName: 'components_common_review_components';
  info: {
    displayName: 'review_component';
    icon: 'apps';
    description: '';
  };
  attributes: {
    likes: Attribute.Component<'common.likes', true>;
    dislikes: Attribute.Component<'common.dislikes', true>;
  };
}

export interface CommonReview extends Schema.Component {
  collectionName: 'components_common_reviews';
  info: {
    displayName: 'review';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    user_details: Attribute.Component<'common.user-details'>;
    infrastructure_hostel_facilities_detail: Attribute.String;
    infrastructure_hostel_facilities_rating: Attribute.Float;
    academics_faculty_details: Attribute.String;
    academics_faculty_rating: Attribute.Float;
    placements_internships_details: Attribute.String;
    placements_internships_rating: Attribute.Float;
    crowd_campus_life_details: Attribute.String;
    crowd_campus_life_rating: Attribute.Float;
    fees_scholarships_details: Attribute.String;
    fees_scholarships_rating: Attribute.Float;
    overallrating: Attribute.Float;
  };
}

export interface CommonSaveCareers extends Schema.Component {
  collectionName: 'components_common_save_careers';
  info: {
    displayName: 'save_careers';
    icon: 'command';
    description: '';
  };
  attributes: {
    careers: Attribute.Relation<
      'common.save-careers',
      'oneToMany',
      'api::career.career'
    >;
  };
}

export interface CommonSaveCollege extends Schema.Component {
  collectionName: 'components_common_save_colleges';
  info: {
    displayName: 'save_college';
    icon: 'expand';
    description: '';
  };
  attributes: {
    colleges: Attribute.Relation<
      'common.save-college',
      'oneToMany',
      'api::college.college'
    >;
  };
}

export interface CommonSaveCourse extends Schema.Component {
  collectionName: 'components_common_save_courses';
  info: {
    displayName: 'save_course';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    courses: Attribute.Relation<
      'common.save-course',
      'oneToMany',
      'api::course.course'
    >;
  };
}

export interface CommonSaveExam extends Schema.Component {
  collectionName: 'components_common_save_exams';
  info: {
    displayName: 'save_exam';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    exams: Attribute.Relation<
      'common.save-exam',
      'oneToMany',
      'api::exam.exam'
    >;
  };
}

export interface CommonSaveScholarships extends Schema.Component {
  collectionName: 'components_common_save_scholarships';
  info: {
    displayName: 'save_scholarships';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    scholarships: Attribute.Relation<
      'common.save-scholarships',
      'oneToMany',
      'api::scholarship.scholarship'
    >;
  };
}

export interface CommonScholarshipComponent extends Schema.Component {
  collectionName: 'components_common_scholarship_components';
  info: {
    displayName: 'scholarship_component';
    icon: 'apps';
  };
  attributes: {
    heading: Attribute.String;
    section: Attribute.Relation<
      'common.scholarship-component',
      'oneToMany',
      'api::navbar.navbar'
    >;
  };
}

export interface CommonScholarships extends Schema.Component {
  collectionName: 'components_common_scholarships';
  info: {
    displayName: 'Scholarships';
  };
  attributes: {
    heading: Attribute.String;
    section: Attribute.Relation<
      'common.scholarships',
      'oneToMany',
      'api::navbar.navbar'
    >;
  };
}

export interface CommonSelectCourseComponent extends Schema.Component {
  collectionName: 'components_common_select_course_components';
  info: {
    displayName: 'select_course_component';
  };
  attributes: {
    heading: Attribute.String;
  };
}

export interface CommonSelectLevelComponent extends Schema.Component {
  collectionName: 'components_common_select_level_components';
  info: {
    displayName: 'select_level_component';
  };
  attributes: {
    heading: Attribute.String;
  };
}

export interface CommonSelectStreamComponent extends Schema.Component {
  collectionName: 'components_common_select_stream_components';
  info: {
    displayName: 'select_stream_component';
  };
  attributes: {
    heading: Attribute.String;
  };
}

export interface CommonSeo extends Schema.Component {
  collectionName: 'components_common_seos';
  info: {
    displayName: 'seo';
    icon: 'apps';
  };
  attributes: {
    page_title: Attribute.Text;
    page_og_title: Attribute.Text;
    page_description: Attribute.Text;
    page_og_description: Attribute.Text;
    page_canonical_url: Attribute.Text & Attribute.Unique;
    page_og_url: Attribute.Text & Attribute.Unique;
    favicon: Attribute.Media;
    favicon_alt_text: Attribute.Text;
  };
}

export interface CommonShortTextComponent extends Schema.Component {
  collectionName: 'components_common_short_text_components';
  info: {
    displayName: 'short_text_component';
  };
  attributes: {
    heading: Attribute.String;
  };
}

export interface CommonStepComponent extends Schema.Component {
  collectionName: 'components_common_step_components';
  info: {
    displayName: 'step_component';
  };
  attributes: {
    heading: Attribute.String;
  };
}

export interface CommonStepDescription extends Schema.Component {
  collectionName: 'components_common_step_descriptions';
  info: {
    displayName: 'step_description';
    icon: 'grid';
  };
  attributes: {
    heading: Attribute.String;
    details: Attribute.Text;
  };
}

export interface CommonTextSection extends Schema.Component {
  collectionName: 'components_common_text_sections';
  info: {
    displayName: 'text_section';
    icon: 'command';
  };
  attributes: {
    header_text: Attribute.String;
    description_text: Attribute.Text;
  };
}

export interface CommonUserDetails extends Schema.Component {
  collectionName: 'components_common_user_details';
  info: {
    displayName: 'user_details';
    icon: 'collapse';
  };
  attributes: {
    name: Attribute.String;
    email: Attribute.String;
  };
}

export interface CommonUser extends Schema.Component {
  collectionName: 'components_common_users';
  info: {
    displayName: 'user';
    icon: 'apps';
    description: '';
  };
  attributes: {
    filed_type: Attribute.Enumeration<
      [
        'name',
        'email',
        'phone',
        'otp',
        'stream',
        'course_level',
        'course',
        'short_text',
        'filled_exams',
        'preferred_colleges',
        'gender',
        'isWhatsappSame',
        'boards',
        'passing_year',
        'percentage',
        'tenth_class_details',
        'twelve_class_details',
        'doctorate_details',
        'additional_education',
        'postgraduate_details',
        'score'
      ]
    >;
    field_label: Attribute.String;
  };
}

export interface CourseAddSpecialization extends Schema.Component {
  collectionName: 'components_course_add_specializations';
  info: {
    displayName: 'Add Specialization';
    icon: 'apps';
  };
  attributes: {};
}

export interface CourseCollegeCourse extends Schema.Component {
  collectionName: 'components_course_college_courses';
  info: {
    displayName: 'College_Course';
    icon: 'apps';
    description: '';
  };
  attributes: {
    course_name: Attribute.Relation<
      'course.college-course',
      'oneToOne',
      'api::course.course'
    >;
    exam_accepted: Attribute.Relation<
      'course.college-course',
      'oneToMany',
      'api::exam.exam'
    >;
    specializations: Attribute.Relation<
      'course.college-course',
      'oneToMany',
      'api::specialization.specialization'
    >;
    course_fee: Attribute.BigInteger;
    course_lebel: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
  };
}

export interface CourseCourse extends Schema.Component {
  collectionName: 'components_course_courses';
  info: {
    displayName: 'Course';
    icon: 'seed';
    description: '';
  };
  attributes: {
    course_name: Attribute.String;
    total_intake: Attribute.String;
    annual_fees: Attribute.String;
    study_mode: Attribute.String & Attribute.DefaultTo<'Regular'>;
    exam_accepted: Attribute.String;
    duration: Attribute.String;
    average_fees: Attribute.String;
    specialisation: Attribute.Component<'course.specialisation', true>;
  };
}

export interface CourseCourses extends Schema.Component {
  collectionName: 'components_course_addcourses';
  info: {
    displayName: 'courses';
    description: '';
  };
  attributes: {
    course: Attribute.Component<'course.course', true>;
    section: Attribute.Text;
  };
}

export interface CourseSpecialisation extends Schema.Component {
  collectionName: 'components_course_specialisations';
  info: {
    displayName: 'specialisation';
    description: '';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface FaqFaqElements extends Schema.Component {
  collectionName: 'components_faq_faq_elements';
  info: {
    displayName: 'FAQ_Elements';
  };
  attributes: {
    Question: Attribute.Text;
    Answer: Attribute.Text;
  };
}

export interface InputAddSpecializations extends Schema.Component {
  collectionName: 'components_input_add_specializations';
  info: {
    displayName: 'add_specializations';
    icon: 'apps';
  };
  attributes: {
    add_specializations: Attribute.String;
  };
}

export interface InputInput extends Schema.Component {
  collectionName: 'input';
  info: {
    displayName: 'add_specializations';
    description: '';
  };
  attributes: {
    section: Attribute.String;
  };
}

export interface InputSpecialisation extends Schema.Component {
  collectionName: 'components_input_specialisations';
  info: {
    displayName: 'Specialisation';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Specializations: Attribute.String;
  };
}

export interface TableColumn extends Schema.Component {
  collectionName: 'components_table_columns';
  info: {
    displayName: 'column';
    icon: 'stack';
    description: '';
  };
  attributes: {
    value: Attribute.String;
    is_heading: Attribute.Enumeration<['yes', 'no']> &
      Attribute.DefaultTo<'no'>;
  };
}

export interface TableRow extends Schema.Component {
  collectionName: 'components_table_rows';
  info: {
    displayName: 'row';
    description: '';
  };
  attributes: {
    col: Attribute.Component<'table.column', true>;
  };
}

export interface TableTable extends Schema.Component {
  collectionName: 'components_table_table';
  info: {
    displayName: 'table';
    description: '';
  };
  attributes: {
    row: Attribute.Component<'table.row', true>;
  };
}

export interface UsermetaAppliedCollegesComponent extends Schema.Component {
  collectionName: 'applied_colleges_components';
  info: {
    displayName: 'Applied_Colleges_Component';
    icon: 'apps';
    description: '';
  };
  attributes: {
    college: Attribute.Relation<
      'usermeta.applied-colleges-component',
      'oneToOne',
      'api::college.college'
    >;
    current_step: Attribute.Relation<
      'usermeta.applied-colleges-component',
      'oneToOne',
      'api::application-step.application-step'
    >;
  };
}

export interface UsermetaAppliedCoursesComponent extends Schema.Component {
  collectionName: 'applied_courses_components';
  info: {
    displayName: 'applied_courses_component';
    icon: 'apps';
    description: '';
  };
  attributes: {
    courses: Attribute.Relation<
      'usermeta.applied-courses-component',
      'oneToOne',
      'api::course.course'
    >;
    current_step: Attribute.Relation<
      'usermeta.applied-courses-component',
      'oneToOne',
      'api::application-step.application-step'
    >;
  };
}

export interface UsermetaAppliedExamsComponent extends Schema.Component {
  collectionName: 'applied_exams_component_s';
  info: {
    displayName: 'applied_exams_component ';
    icon: 'apps';
    description: '';
  };
  attributes: {
    exams: Attribute.Relation<
      'usermeta.applied-exams-component',
      'oneToOne',
      'api::exam.exam'
    >;
    current_step: Attribute.Relation<
      'usermeta.applied-exams-component',
      'oneToOne',
      'api::application-step.application-step'
    >;
  };
}

export interface UsermetaAppliedScholarships extends Schema.Component {
  collectionName: 'components_usermeta_applied_scholarships';
  info: {
    displayName: 'applied_scholarships';
    icon: 'apps';
  };
  attributes: {
    scholarships: Attribute.Relation<
      'usermeta.applied-scholarships',
      'oneToOne',
      'api::scholarship.scholarship'
    >;
    current_step: Attribute.Relation<
      'usermeta.applied-scholarships',
      'oneToOne',
      'api::application-step.application-step'
    >;
  };
}

export interface UsermetaCareersInterested extends Schema.Component {
  collectionName: 'components_usermeta_careers_interested_s';
  info: {
    displayName: 'careers_interested ';
    icon: 'apps';
  };
  attributes: {
    careers: Attribute.Relation<
      'usermeta.careers-interested',
      'oneToOne',
      'api::career.career'
    >;
    current_step: Attribute.Relation<
      'usermeta.careers-interested',
      'oneToOne',
      'api::application-step.application-step'
    >;
  };
}

export interface UsermetaCountriesInterested extends Schema.Component {
  collectionName: 'components_usermeta_countries_interesteds';
  info: {
    displayName: 'countries_interested';
    icon: 'apps';
  };
  attributes: {
    countries: Attribute.Relation<
      'usermeta.countries-interested',
      'oneToOne',
      'api::country.country'
    >;
    current_step: Attribute.Relation<
      'usermeta.countries-interested',
      'oneToOne',
      'api::application-step.application-step'
    >;
  };
}

export interface UsermetaEntranceExam extends Schema.Component {
  collectionName: 'components_usermeta_entrance_exams';
  info: {
    displayName: 'entrance_exam';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    exam: Attribute.Relation<
      'usermeta.entrance-exam',
      'oneToOne',
      'api::exam.exam'
    >;
    score: Attribute.String;
  };
}

export interface UsermetaOtherServiceInterest extends Schema.Component {
  collectionName: 'other-service-interest';
  info: {
    displayName: 'other_service_interest';
    icon: 'apps';
    description: '';
  };
  attributes: {
    landing_pages: Attribute.Relation<
      'usermeta.other-service-interest',
      'oneToOne',
      'api::landing-page.landing-page'
    >;
    current_step: Attribute.Relation<
      'usermeta.other-service-interest',
      'oneToOne',
      'api::application-step.application-step'
    >;
  };
}

export interface UsermetaPreferredInstitutions extends Schema.Component {
  collectionName: 'components_usermeta_preferred_institutions';
  info: {
    displayName: 'preferred_institutions';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    college: Attribute.Relation<
      'usermeta.preferred-institutions',
      'oneToOne',
      'api::college.college'
    >;
  };
}

export interface UsermetaProfessionalExperienceComponent
  extends Schema.Component {
  collectionName: 'components_usermeta_professional_experience_components';
  info: {
    displayName: 'Professional_ Experience_Component';
    description: '';
  };
  attributes: {
    organizationName: Attribute.String;
    jobPosition: Attribute.String;
    jobStart: Attribute.String;
    jobEnd: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.10th-class-info-component': Common10thClassInfoComponent;
      'common.12th-class-info-component': Common12ThClassInfoComponent;
      'common.add-specializations': CommonAddSpecializations;
      'common.application-date': CommonApplicationDate;
      'common.application-status-component': CommonApplicationStatusComponent;
      'common.artical': CommonArtical;
      'common.awards': CommonAwards;
      'common.banner-component': CommonBannerComponent;
      'common.button-type': CommonButtonType;
      'common.careers-component': CommonCareersComponent;
      'common.careers': CommonCareers;
      'common.colleges-component': CommonCollegesComponent;
      'common.colleges': CommonColleges;
      'common.compare-component': CommonCompareComponent;
      'common.coueses': CommonCoueses;
      'common.countries-component': CommonCountriesComponent;
      'common.course-component': CommonCourseComponent;
      'common.courses-component': CommonCoursesComponent;
      'common.courses': CommonCourses;
      'common.department-component': CommonDepartmentComponent;
      'common.discussion-forum-reply': CommonDiscussionForumReply;
      'common.discussion-forum': CommonDiscussionForum;
      'common.dislikes': CommonDislikes;
      'common.email-component': CommonEmailComponent;
      'common.exams-component': CommonExamsComponent;
      'common.exams': CommonExams;
      'common.exm-date': CommonExmDate;
      'common.faq': CommonFaq;
      'common.fill-exams-component': CommonFillExamsComponent;
      'common.filled-exams': CommonFilledExams;
      'common.form-stape': CommonFormStape;
      'common.gallery': CommonGallery;
      'common.google-ads': CommonGoogleAds;
      'common.graduation-info-component': CommonGraduationInfoComponent;
      'common.jee-rank-predictor': CommonJeeRankPredictor;
      'common.likes': CommonLikes;
      'common.long-text-component': CommonLongTextComponent;
      'common.nav-bar': CommonNavBar;
      'common.nav-item': CommonNavItem;
      'common.nav': CommonNav;
      'common.navbar': CommonNavbar;
      'common.neet-rank-predictor': CommonNeetRankPredictor;
      'common.new-overview': CommonNewOverview;
      'common.newpaper': CommonNewpaper;
      'common.news-and-update': CommonNewsAndUpdate;
      'common.phone-number-component': CommonPhoneNumberComponent;
      'common.pointers': CommonPointers;
      'common.rating-and-review': CommonRatingAndReview;
      'common.recommended-careers': CommonRecommendedCareers;
      'common.recommended-colleges': CommonRecommendedColleges;
      'common.recommended-countries': CommonRecommendedCountries;
      'common.recommended-courses': CommonRecommendedCourses;
      'common.recommended-exams': CommonRecommendedExams;
      'common.recommended-scholarships': CommonRecommendedScholarships;
      'common.result-date': CommonResultDate;
      'common.review-component': CommonReviewComponent;
      'common.review': CommonReview;
      'common.save-careers': CommonSaveCareers;
      'common.save-college': CommonSaveCollege;
      'common.save-course': CommonSaveCourse;
      'common.save-exam': CommonSaveExam;
      'common.save-scholarships': CommonSaveScholarships;
      'common.scholarship-component': CommonScholarshipComponent;
      'common.scholarships': CommonScholarships;
      'common.select-course-component': CommonSelectCourseComponent;
      'common.select-level-component': CommonSelectLevelComponent;
      'common.select-stream-component': CommonSelectStreamComponent;
      'common.seo': CommonSeo;
      'common.short-text-component': CommonShortTextComponent;
      'common.step-component': CommonStepComponent;
      'common.step-description': CommonStepDescription;
      'common.text-section': CommonTextSection;
      'common.user-details': CommonUserDetails;
      'common.user': CommonUser;
      'course.add-specialization': CourseAddSpecialization;
      'course.college-course': CourseCollegeCourse;
      'course.course': CourseCourse;
      'course.courses': CourseCourses;
      'course.specialisation': CourseSpecialisation;
      'faq.faq-elements': FaqFaqElements;
      'input.add-specializations': InputAddSpecializations;
      'input.input': InputInput;
      'input.specialisation': InputSpecialisation;
      'table.column': TableColumn;
      'table.row': TableRow;
      'table.table': TableTable;
      'usermeta.applied-colleges-component': UsermetaAppliedCollegesComponent;
      'usermeta.applied-courses-component': UsermetaAppliedCoursesComponent;
      'usermeta.applied-exams-component': UsermetaAppliedExamsComponent;
      'usermeta.applied-scholarships': UsermetaAppliedScholarships;
      'usermeta.careers-interested': UsermetaCareersInterested;
      'usermeta.countries-interested': UsermetaCountriesInterested;
      'usermeta.entrance-exam': UsermetaEntranceExam;
      'usermeta.other-service-interest': UsermetaOtherServiceInterest;
      'usermeta.preferred-institutions': UsermetaPreferredInstitutions;
      'usermeta.professional-experience-component': UsermetaProfessionalExperienceComponent;
    }
  }
}
