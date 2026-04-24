import{d as n}from"./index-D26ra9pc.js";const e=`working_groups:
  - id: wg-1
    name: WG 1 AI Data Readiness and Curation
    emoji: 🗄️
    resources:
      GitHub Repository: https://github.com/eumetnet-e-ai/wg1_data_curation
      RocketChat: https://chat.europeanweather.cloud/channel/e-ai_wg1_data_curation
    facilitators:
      - name: Roope Tervo
        email: roope.tervo@eumetsat.int
      - name: Arianna Valmossoi
        email: Arianna.Valmassoi@dwd.de
      - name: Stephan Siemen
        email: stephan.siemen@ecmwf.int
  - id: wg-2
    name: WG 2 Large Language Models (LLMs)
    emoji: 💬
    description: Implementation and Services with AI-based Information Condensation and Communication, AI-based High Impact Weather (HIW) Warnings, Personalisation
    resources:
      GitHub Repository: https://github.com/eumetnet-e-ai/wg2_llm
    facilitators:
      - name: Johannes Schenk
        email: Johannes.Schenk@dwd.de
      - name: Frank Guibert
        email: frank.guibert@meteo.fr
  - id: wg-3
    name: WG 3 AI Operationalisation, Maintenance and QC, MLOps with AI Frameworks and Libraries (formerly WG 9)
    emoji: ⚙️
    resources:
      GitHub Repository: https://github.com/eumetnet-e-ai/wg3_operations
    facilitators:
      - name: Gabriela Aznar Siguan
        email: gabriela.aznar@meteoswiss.ch
      - name: Frank Guibert
        email: frank.guibert@meteo.fr
  - id: wg-6
    name: WG 6 MLCast Nowcasting
    emoji: ⚡
    joint_programme: EUMETNET NWC Programme
    resources:
      Notes: https://bit.ly/mlcast
      GitHub Repository: https://github.com/mlcast-community
      Mailing List: mailto:mlcastcommunity+subscribe@googlegroups.com
      Slack (MLCast): https://join.slack.com/t/mlcast/shared_invite/zt-3jmt7o0ck-DRIhX3bqSWU4gsmD_Y0m5w
    facilitators:
      - name: Irene Livia Kruse
        email: ikr@dmi.dk
      - name: Leif Denby
        email: lcd@dmi.dk
      - name: Irene Schicker
        email: irene.schicker@geosphere.at
    description: |-
      **Aim**

      The aim of the MLCast community is to organize our joint-development of an open-source Python package that unifies machine-learning models for nowcasting. Please contribute to this document by adding/commenting/editing anywhere you would like.

      In more detail, we're aiming for:

      *   **Open-source development** through a new GitHub organization where all contributors have equal ownership in the development software.
      *   **A single Python package** which:
          *   has simple and clean API for calling different pre-trained ML based nowcasting algorithms
          *   allows for training of ML based nowcasting algorithms
          *   contains functionality to benchmark models including retrieving testing datasets (we envisage storing these on European Weather Cloud S3)
          *   is tested through CI/CD using GitHub Actions (ideally running on GPUs)
      *   **A community** that meets regularly to discuss the package development and further scientific development of techniques for nowcasting with ML.

      This collective gives the chance to spread the benefit of access to GPUs for nowcasting: institutes with access to GPUs can train the models, and institutes with little access to GPUs can help develop, test, and ultimately use the models.
  - id: wg-7
    name: WG 7 AI in the EUMETNET Aviation Support Programme
    emoji: ✈️
    contacts:
      - name: Mihaly Szucs
        email: mihaly.szucs@eumetnet.eu
  - id: wg-8
    name: WG 8 Ethics Questions
    emoji: ⚖️
    resources:
      GitHub Repository: https://github.com/eumetnet-e-ai/wg08_ethics
  - id: wg-10
    name: WG 10 Data Rescue
    emoji: 🛟
    joint_programme: EUMETNET Climate Programme
    facilitators:
      - name: Marlies van der Schee
        email: marlies.van.der.schee@knmi.nl
      - name: Barbara Chimani
        email: barbara.chimani@geosphere.at
  - id: wg-11
    name: WG 11 Regional Downscaling for Climate Impact Analysis
    emoji: 🔍
    joint_programme: EUMETNET Climate Programme
    facilitators:
      - name: Barbara Chimani
        email: barbara.chimani@geosphere.at
  - id: wg-12
    name: WG 12 Quality Control
    emoji: ✅
    joint_programme: EUMETNET Climate Programme
    facilitators:
      - name: Barbara Chimani
        email: barbara.chimani@geosphere.at
  - id: wg-13
    name: WG 13 Data Fusion and PostProcessing (PP)
    emoji: 🧩
  - id: ats
    name: ATS Anemoi Technical Subgroup (formerly ATG)
    emoji: 🌬️
    contacts:
      - name: Matthew Chantry
        email: Matthew.Chantry@ecmwf.int
`,a=n.load(e),t=a.working_groups;export{t as w};
