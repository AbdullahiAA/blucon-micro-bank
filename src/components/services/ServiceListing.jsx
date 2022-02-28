import React from "react";
import ServiceCard from "./ServiceCard";
import serviceThriftImg from "../../images/serviceThrift.png";
import serviceBankImg from "../../images/serviceBank.png";
import serviceCreditImg from "../../images/serviceCredit.png";
import serviceEquipImg from "../../images/serviceEquipment.png";
import serviceFarmImg from "../../images/serviceFarm.png";
import serviceTricycleImg from "../../images/serviceTricycle.png";
import serviceTechnicalImg from "../../images/serviceTechnical.png";
import serviceCustodyImg from "../../images/serviceCustody.png";
import "./ServiceListing.css";

function ServiceListing() {
  return (
    <div className="serviceListing">
      <ServiceCard
        title="Daily Thrift Contribution"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nisi vel
          nullam lacus, velit. Mattis massa odio nisl gravida in phasellus
          consectetur tortor, nisl. Dui praesent elit quis ut aliquet. Turpis
          porta tincidunt ut dictumst tortor ut justo, amet, mi. Velit vel fusce
          neque, diam risus, nibh amet. Quam sagittis lacinia eget urna nisl. Ut
          nulla orci vel egestas vestibulum cursus massa id."
        imgURL={serviceThriftImg}
      />

      <ServiceCard
        title="Bank Account"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nisi vel nullam lacus, velit. Mattis massa odio nisl gravida in phasellus consectetur tortor, nisl. Dui praesent elit quis ut aliquet. Turpis porta tincidunt ut dictumst tortor ut justo, amet, mi. Velit vel fusce neque, diam risus, nibh amet. Quam sagittis lacinia eget urna nisl. Ut nulla orci vel egestas vestibulum cursus massa id."
        imgURL={serviceBankImg}
        showImgFirst
      />

      <ServiceCard
        title="Credit Facilities"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nisi vel nullam lacus, velit. Mattis massa odio nisl gravida in phasellus consectetur tortor, nisl. Dui praesent elit quis ut aliquet. Turpis porta tincidunt ut dictumst tortor ut justo, amet, mi. Velit vel fusce neque, diam risus, nibh amet. Quam sagittis lacinia eget urna nisl. Ut nulla orci vel egestas vestibulum cursus massa id."
        imgURL={serviceCreditImg}
        showFullCard
      />

      <ServiceCard
        title="Equipment Microleasing"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nisi vel nullam lacus, velit. Mattis massa odio nisl gravida in phasellus consectetur tortor, nisl. Dui praesent elit quis ut aliquet. Turpis porta tincidunt ut dictumst tortor ut justo, amet, mi. Velit vel fusce neque, diam risus, nibh amet. Quam sagittis lacinia eget urna nisl. Ut nulla orci vel egestas vestibulum cursus massa id."
        imgURL={serviceEquipImg}
        showImgFirst
      />

      <ServiceCard
        title="Farm Input Loan"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nisi vel nullam lacus, velit. Mattis massa odio nisl gravida in phasellus consectetur tortor, nisl. Dui praesent elit quis ut aliquet. Turpis porta tincidunt ut dictumst tortor ut justo, amet, mi. Velit vel fusce neque, diam risus, nibh amet. Quam sagittis lacinia eget urna nisl. Ut nulla orci vel egestas vestibulum cursus massa id."
        imgURL={serviceFarmImg}
      />

      <ServiceCard
        title="Tricycle Financing"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nisi vel nullam lacus, velit. Mattis massa odio nisl gravida in phasellus consectetur tortor, nisl. Dui praesent elit quis ut aliquet. Turpis porta tincidunt ut dictumst tortor ut justo, amet, mi. Velit vel fusce neque, diam risus, nibh amet. Quam sagittis lacinia eget urna nisl. Ut nulla orci vel egestas vestibulum cursus massa id."
        imgURL={serviceTricycleImg}
        showImgFirst
        showFullCard
      />

      <ServiceCard
        title="Technical Support"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nisi vel nullam lacus, velit. Mattis massa odio nisl gravida in phasellus consectetur tortor, nisl. Dui praesent elit quis ut aliquet. Turpis porta tincidunt ut dictumst tortor ut justo, amet, mi. Velit vel fusce neque, diam risus, nibh amet. Quam sagittis lacinia eget urna nisl. Ut nulla orci vel egestas vestibulum cursus massa id."
        imgURL={serviceTechnicalImg}
      />

      <ServiceCard
        title="Safe Custody Services"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nisi vel nullam lacus, velit. Mattis massa odio nisl gravida in phasellus consectetur tortor, nisl. Dui praesent elit quis ut aliquet. Turpis porta tincidunt ut dictumst tortor ut justo, amet, mi. Velit vel fusce neque, diam risus, nibh amet. Quam sagittis lacinia eget urna nisl. Ut nulla orci vel egestas vestibulum cursus massa id."
        imgURL={serviceCustodyImg}
        showImgFirst
      />
    </div>
  );
}

export default ServiceListing;
