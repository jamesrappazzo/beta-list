from mongoengine import EmbeddedDocument, EmbeddedDocumentField, IntField, FloatField, ListField, BooleanField, StringField, DateField, DynamicDocument

class Pregnancy(EmbeddedDocument):
    desired = BooleanField()
    rh_positive = BooleanField()
    birth_control_method = StringField()


class Parity(EmbeddedDocument):
    num_full_term_births = IntField()
    num_pre_term_births = IntField()
    num_abortions = IntField()
    num_living_children = IntField()


class Presentation(EmbeddedDocument):
    gravity = IntField()
    parity = EmbeddedDocumentField(Parity)
    last_menstrual_period = DateField()
    presenting_symptoms = ListField(StringField())


class CubicDimensions(EmbeddedDocument):
    length = FloatField()
    width = FloatField()
    height = FloatField()


class Uterus(EmbeddedDocument):
    orientation = StringField()
    dimensions = EmbeddedDocumentField(CubicDimensions)
    endometrial_thickness = FloatField()


class Ovary(EmbeddedDocument):
    present = BooleanField()
    side = StringField(choices=('left', 'right'))
    dimensions = EmbeddedDocumentField(CubicDimensions)


class GestationalSack(EmbeddedDocument):
    size = FloatField()


class AdnexalMass(EmbeddedDocument):
    side = StringField(choices=('left', 'right'))
    size = FloatField()
    location = StringField()


class TransvaginalUltrasound(EmbeddedDocument):
    ultrasound_date = DateField()
    uterus = EmbeddedDocumentField(Uterus)
    ovaries = ListField(EmbeddedDocumentField(Ovary))
    intra_uterine_pregnancy_present = BooleanField()
    gestational_sack = EmbeddedDocumentField(GestationalSack)
    yolk_sack_present = BooleanField()
    crown_rump_length = FloatField()
    fetal_heart_rate_present = BooleanField()
    estimated_gestational_age_in_days = IntField()
    adnexal_masses = ListField(EmbeddedDocumentField(AdnexalMass))
    free_fluid_amount = StringField()


class BetaReading(EmbeddedDocument):
    reading_date = DateField()
    level = IntField()


class MethotrexateDose(EmbeddedDocument):
    administration_date = DateField()
    quantity = IntField()


class PathologyResult(EmbeddedDocument):
    result_date = DateField()
    products_of_conception = BooleanField()
    comments = StringField()


class DoctorVisit(EmbeddedDocument):
    mva_performed = BooleanField()
    sonogram_performed = BooleanField()
    no_action_performed = BooleanField()
    other_actions_performed = BooleanField()


class PhoneCall(EmbeddedDocument):
    phone_number_called = StringField()
    call_successful = BooleanField()
    message_left = BooleanField()
    unable_to_reach = BooleanField()


class EmergencyDepartmentVisit(EmbeddedDocument):
    sonogram_performed = BooleanField()
    beta_levels_measured = BooleanField()
    other_action_performed = StringField()


class PatientInteraction(EmbeddedDocument):
    interaction_date = DateField()
    doctor_visit = EmbeddedDocumentField(DoctorVisit)
    certified_letter_sent = BooleanField()
    phone_calls = ListField(EmbeddedDocumentField(PhoneCall))
    emergency_department_visit = EmbeddedDocumentField(
        EmergencyDepartmentVisit)


class FollowUpPlan(EmbeddedDocument):
    start_date = DateField()
    due_date = DateField()
    repeat_beta = BooleanField()
    sonogram = BooleanField()
    mva = BooleanField()
    family_planning_appointment = BooleanField()
    refer_to_prenatal_care = BooleanField()


class Patient(DynamicDocument):
    first_name = StringField()
    last_name = StringField()
    medical_record_number = StringField()
    phone_number = StringField()
    date_of_birth = DateField()
    attending_physician_last_name = StringField()
    pregnancy = EmbeddedDocumentField(Pregnancy)
    presentation = EmbeddedDocumentField(Presentation)
    transvaginal_ultrasound = ListField(EmbeddedDocumentField(TransvaginalUltrasound))
    beta_readings = ListField(EmbeddedDocumentField(BetaReading))
    methotrexate_doses = ListField(EmbeddedDocumentField(MethotrexateDose))
    pathology_results = EmbeddedDocumentField(PathologyResult)
    patient_interactions = ListField(EmbeddedDocumentField(PatientInteraction))
    follow_up_plans = ListField(EmbeddedDocumentField(FollowUpPlan))
    meta = {'collection': 'beta-list'}
