import type { AppRouterOutput } from "@chair-flight/trpc/server";

export const mockData: AppRouterOutput["containers"]["learningObjectives"]["getLearningObjectiveOverview"] =
  {
    learningObjective: {
      id: "010.01",
      parentId: "010",
      courses: ["ATPL_A", "CPL_A", "ATPL_H_IR", "ATPL_H_VFR", "CPL_H"],
      questions: [
        "Q000YBA1ON",
        "Q4C6S9NWGH",
        "Q9O4GSAUCE",
        "Q9R9VLD9NK",
        "QOFKKXR650",
        "QQI73SKGJD",
        "QXT8DQPDMR",
        "QYMZ7WHWKN",
        "QZEYYWZCFK",
        "QL2NSAOJTT",
        "Q5ODFU6MV3",
        "QYW1HC5B97",
        "QYGJ9YUC5Y",
        "QJMEXQUX22",
        "QZQB4V3OS7",
        "Q4MIEV4WCR",
        "QNBD73UCGU",
        "QYICVYV10Y",
        "QQOO7V8D8Y",
        "QII8OY7M7Z",
        "QQEAGWEACP",
        "QQOFYZT9ZA",
      ],
      text: "International Law:\n-  Conventions, Agreements And Organisations",
      learningObjectives: ["010.01.01", "010.01.02", "010.01.03", "010.01.04"],
      source: "",
      nestedQuestions: [
        "Q000YBA1ON",
        "Q4C6S9NWGH",
        "Q9O4GSAUCE",
        "Q9R9VLD9NK",
        "QOFKKXR650",
        "QQI73SKGJD",
        "QXT8DQPDMR",
        "QYMZ7WHWKN",
        "QZEYYWZCFK",
        "QL2NSAOJTT",
        "Q5ODFU6MV3",
        "QYW1HC5B97",
        "QYGJ9YUC5Y",
        "QJMEXQUX22",
        "QZQB4V3OS7",
        "Q4MIEV4WCR",
        "QNBD73UCGU",
        "QYICVYV10Y",
        "QQOO7V8D8Y",
        "QII8OY7M7Z",
        "QQEAGWEACP",
        "QQOFYZT9ZA",
        "Q0LY5P7KSB",
        "Q42BT8RS09",
        "QIPXRHZXJP",
        "QR5OFT57G0",
        "QW1I4W0WV0",
        "Q55RQ6Y7VN",
        "Q6C0N5RDTX",
        "Q8CJ3AUID7",
        "Q8JKW3I6ZA",
        "Q9G5PM0AMR",
        "QAMZ0SOUXT",
        "QCGHB138MO",
        "QG0HRNX67L",
        "QGGQOYBQTT",
        "QJ39GECW9K",
        "QVQLK8U4IR",
        "QYVQ1I18FV",
        "QDH95N2G31",
        "QE3PW5NZK4",
        "QINT9D2E9Z",
        "QT7GWYXPBF",
        "QU3EO7PDVW",
        "Q39QM81P5Y",
        "QKN0A0M4L1",
        "QQOK3BZXR3",
        "QR0M6T4VUS",
        "QVNLW4WHHO",
        "QIDO7WZCFH",
        "QJDL4MQRC6",
        "QU4S2L8UKZ",
        "QCF2IFLM04",
        "QWGZECKTVL",
        "QAOC20S3IL",
        "QNUBPD6Z61",
        "QXB4MMX69P",
        "Q8AXUNQDBX",
        "QDMGKHBO6Q",
        "QGL5Q8E5NZ",
        "QU3EQP6467",
        "Q5I3O2GYHX",
        "Q7U32SA6PU",
        "Q7YI688L6S",
        "Q99XQZWI17",
        "QEN6XPPX6F",
        "QIJ1WTS6WA",
        "QSANGW0C2H",
        "QTUOKY68YE",
        "QYD3VDVVJA",
        "QIOJ12YP03",
        "QNN7OKCT8L",
        "Q82AVLL9TJ",
        "QBJKNX5B4O",
        "QJGI2U20BM",
        "QM1SY7GFHN",
        "QA4HIXUKAZ",
        "QD6TE6EYLO",
        "QDJ15RXJXO",
        "QF92R417N3",
        "QPG9OMOLDU",
        "QRS992FQKN",
        "Q8X757B2TY",
        "Q9YBKOO57T",
        "QCGGYAISS9",
        "QG253GJTYR",
        "QJATVQL1B0",
        "Q7JS9FCTF3",
        "Q7STLP9XQK",
        "QJ4MQVYQJH",
        "QJZ93PIMRC",
        "QLHXI54XLI",
        "Q0JGOZVR7S",
        "QAX38WR259",
        "QBBU2EXUQ0",
        "QHDZQ19ABV",
        "QJ1OT6UFOL",
        "QPEA49Y9QY",
        "QUNDNWZRPF",
        "Q1XSGFH9NV",
        "Q26L3WKZ61",
        "Q3XNYTOH0S",
        "Q3YFO0WJ1I",
        "Q5TZDYZHXG",
        "Q7OJG2WRFW",
        "QM56M8M1HF",
        "QMWBYWDPJ5",
        "QO7MWZ4WRG",
        "QRHORC2JXN",
        "QT3IOPLU6O",
        "QUA16SNSGW",
        "QVELORJRVZ",
        "QWEMOTIF8O",
        "QXFCDYVAIF",
        "QZ03GEKKS1",
        "QZ66LA1N4J",
        "Q2KR0V61G1",
        "QNOFSGZXSL",
        "QM8N7KUQK1",
        "QV6F3KVWM1",
        "QV1OOIFH77",
        "Q1CSODOI5C",
        "Q3ZP858O4I",
        "Q64Z2CM3AC",
        "Q7ALBZ3YSP",
        "Q7RK9NJZJG",
        "Q84JNPGDA6",
        "Q90MXOWJ2D",
        "QB8PVRTXN6",
        "QBZ6A7LF7B",
        "QCTH9GY034",
        "QD8YOPCPX8",
        "QF1UCWTUXJ",
        "QI6SF2ZISD",
        "QIUVAK2VXE",
        "QL7K3X26R0",
        "QLIR83O062",
        "QSPEPQMFZM",
        "QSRUHIDBUN",
        "QUG32YP4QB",
        "QY84JPN3K1",
        "Q6TJX129E9",
        "Q5BMMU05JE",
        "Q74ICEQ3V4",
        "Q7M840K5LX",
        "Q8535X5P7G",
        "Q98FYI0TAB",
        "Q9XBLSDHOP",
        "QC41LVC1UI",
        "QCQL8QGRG2",
        "QCVMHNYAKK",
        "QIOLAEP4JV",
        "QN94VJ9UPM",
        "QPFC1XV2UO",
        "QVSAXISQAW",
        "QXJVWYSV5E",
        "QJGECH5KQ9",
        "QMDIQ6XSOF",
        "Q4DIWPPO56",
        "Q6UYEVTVQ4",
        "Q9C7KOEYUT",
        "QA1PW4XVFW",
        "QAYKP3GYXK",
        "QCG7QUI6F1",
        "QDQDTVG95V",
        "QFXQA3PSF7",
        "QGT6I5U7FI",
        "QJOKGPWTG1",
        "QMY2RU9687",
        "QQ9XCEDVJI",
        "QQKM8L85GJ",
        "QR0SDREX6Z",
        "QXQXX8U31M",
        "QYXL6F2K8L",
        "QAJPPPUK85",
        "QO35LKEKPO",
        "QR5QCYBZ8M",
        "Q2CGFE1OCO",
        "Q3XNN22GER",
        "Q8SHFKRBVI",
        "Q9LPY4W3HK",
        "QH9GKUTS9C",
        "QI5Y2GJ9KH",
        "QL4Y6YL9KJ",
        "QMCMBNZX2X",
        "QRMLWB4E3T",
        "QSQQ54NWQJ",
        "QUQ75C28Y2",
        "QV5DQ7BOWN",
        "QX2WS2CFIU",
      ],
    },
    courses: [
      { id: "ATPL_A", text: "ATPL(A)" },
      { id: "CPL_A", text: "CPL(A)" },
      { id: "ATPL_H_IR", text: "ATPL(H) IR" },
      { id: "ATPL_H_VFR", text: "ATPL(H) VFR" },
      { id: "CPL_H", text: "CPL(H)" },
      { id: "IR", text: "IR" },
      { id: "CBIR_A", text: "CBIR(A)" },
    ],
  };