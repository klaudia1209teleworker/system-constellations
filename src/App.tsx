import { Hero } from './components/Hero'
import { LineCta } from './components/LineCta'
import { Section } from './components/Section'
import { SiteNav } from './components/SiteNav'
import { LINE_ID, LINE_URL } from './lib/constants'

const schedule = [
  { month: '三月', days: '3/6 (六)、3/7 (日）、3/21 (日）' },
  { month: '四月', days: '4/17 (六)、4/18 (日）、4/25 (日）' },
  { month: '五月', days: '5/16 (日)、5/22 (六）、5/23 (日）' },
  { month: '六月', days: '6/12 (六)、6/13 (日）、6/20 (日）' },
  { month: '七月', days: '7/10 (六)、7/11 (日）、7/18 (日）' },
  { month: '八月', days: '8/14 (六)、8/15 (日）、8/22 (日）' },
  { month: '九月', days: '9/11 (六)、9/12 (日）、9/19 (日）' },
  { month: '十月', days: '10/10 (日)、10/11 (一）、10/17 (日）' },
  { month: '十一月', days: '11/13 (六)、11/14 (日）、11/21 (日）' },
  { month: '十二月', days: '12/11 (六)、12/12 (日）、12/19 (日）' },
]

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="mt-4 list-decimal space-y-2 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ol>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <SiteNav />

      <Section id="intro" title="開場" eyebrow="親愛的學員們">
        <p>大家久等了！</p>
        <p>
          自2025年7月 Stephen
          老師再次在台灣開設工作坊以來、這一年多的時間、一直有學員在詢問老師會開系統排列師培訓課嗎？我們總是回答會的、但老師需要一點時間重新調整培訓課的內容。
        </p>
        <p>
          對於Stephen
          老師來說、培訓系統排列師不只是教會學員如何做排列、更重要的是、系統排列師本身需要有更多個人靈性成長的學習、對能量與場域有更多深入的了解與讀取能力、其自身也需被療癒到一定的程度、給出的才會是真的療癒、而不是二次傷害。
        </p>
        <p>
          也因此、Stephen
          老師對於學員的招募有他自己的要求、培訓課程的時間也比較長、為的是確保未來的每位系統排列師是準備好的狀態。
        </p>
        <p>謝謝大家的耐心等待、有關：</p>
        <NumberedList
          items={[
            '系統排列師培訓三合一課程內容介紹：系統排列師培訓課程、個人靈性成長課程、能量學課程',
            '課程條款與規範',
            '系統排列師認證資格與評核標準',
            '報名相關(日期、費用等)',
          ]}
        />
        <p className="mt-4">請往下參考詳細內容介紹、謝謝。</p>
        <p>期待與大家在培訓課相見！</p>
      </Section>

      <Section id="notice" title="注意事項｜重要！" tone="notice">
        <div className="border-l-[3px] border-highlight pl-4 text-highlight">
          <p>
            1.
            本課程採審核制、為非公開招生課程、請尊重老師授課方式、勿私下分享報名表。
          </p>
          <p className="mt-4">2. 報名資格與甄選</p>
          <p className="mt-2">
            a.
            意欲報名參加者、須先透過官方Line提出申請、並接受老師的面談。
          </p>
          <p className="mt-2">
            b.
            本課程採審核制、並非所有人皆可報名參加、謝謝大家的配合與諒解。
          </p>
        </div>
        <p className="mt-6 text-sm text-muted">
          報名表內的課程介紹、為期十個月的培訓課程大綱及課程內容均受版權保護，版權歸
          Stephen Victor
          所有、未經著作權持有者的同意，任何人不得擅自翻印、重製、改編或散布其全部或部分內容。
        </p>
        <div className="mt-8">
          <LineCta label="前往官方 Line 提出申請" />
        </div>
      </Section>

      <Section
        id="curriculum"
        title="系統排列師培訓課程內容介紹"
        eyebrow="含個人靈性成長＆能量學內容"
      >
        <h3 className="text-xl font-semibold text-text md:text-2xl">
          一、課程背景與定位（Context）
        </h3>
        <p className="mt-4">
          這項培訓不僅是一套系統排列師的培訓課程，同時也是一場著重於個人與靈性發展的研習課程。
        </p>
        <p>主要分成兩大授課內容：</p>
        <NumberedList
          items={[
            '個人靈性成長＆能量學。',
            '海靈格古典排列家排師認證培訓課程（包含學員個人生命議題排列）。',
          ]}
        />
        <p className="mt-4">
          海靈格家族排列（Hellinger
          Constellations）主要有三種不同的取向：
        </p>
        <NumberedList
          items={[
            '古典排列（Classical Constellations）',
            '靈魂動力排列（Movements of the Soul）',
            '精神動力排列（Movements of the Spirit）',
          ]}
        />
        <p className="mt-4">
          Stephen老師
          將以海靈格的「古典排列」作為主要教學內容。根據他的實務經驗，古典排列能夠帶來最全面、深入的療癒、改變與生命動力的流動。
        </p>
        <p>
          不過，這種排列方式有一項必要條件：系統排列師必須具備不同於一般人的敏銳感知能力、以及足以「看見」現實中能量層面的感知能力。系統排列師必須學會讀取「場域」（Field）、而不只是觀察代表者在排列中的位置與站位。
        </p>
        <p>
          Stephen
          將與學員一起探索海靈格的「靈魂動力」（Movements of the
          Soul）與「精神動力」（Movements of the
          Spirit）排列。然而，學員的專業能力培養與評量，仍將以古典排列的掌握程度作為主要依據。
        </p>

        <h3 className="mt-10 text-xl font-semibold text-text md:text-2xl">
          二、Stephen Victor 的教學意圖（Stephen Victor’s Intent）
        </h3>
        <p className="mt-4">
          培養能夠以尊重人性、善待他人的態度生活與工作的實務工作者、並在學習如何「完整地去愛」（Love
          Completely）的過程中：
        </p>
        <BulletList
          items={[
            '活出並展現自己的個人力量。',
            '建立自主性與自我主導能力。',
            '培養內在穩定與復原力。',
            '進一步協助他人經歷改變與療癒。',
            '陪伴他人成為自己來到這個世界上所要成為的那個人。',
          ]}
        />

        <h3 className="mt-10 text-xl font-semibold text-text md:text-2xl">
          三、教學方式（Teaching Process）
        </h3>
        <p className="mt-4">課程將結合兩種學習方式：</p>
        <BulletList
          items={[
            '透過親身參與、體驗、觀察與感受，逐漸熟悉排列工作的節奏、能量與運作方式。',
            '有系統地學習排列工作的基本結構、原則、規則與操作方法。',
          ]}
        />
        <p className="mt-4">
          換句話說，學員不只要學會如何操作排列、也要透過實際體驗、培養對排列工作的理解、感知與掌握能力。
        </p>

        <h3 className="mt-10 text-xl font-semibold text-text md:text-2xl">
          四、培訓的具體架構與流程
        </h3>
        <p className="mt-4">課程將透過以下方式進行：</p>
        <BulletList
          items={[
            '講授（Lecture）：建立理論基礎與核心概念。',
            '探索練習（Discovery Exercises）：透過引導式練習，發現並探索新的理解。',
            '體驗式學習（Experiential Learning）：藉由親身參與（包含學員個人生命議題排列）、深化學習與感知。',
            '示範與觀察（Demonstration / Observation）：觀摩實際操作，理解排列的進行方式。',
            '專業能力培養（Competency）：透過知識、智慧、觀察與實際練習，逐步建立專業引導能力。',
          ]}
        />

        <h3 className="mt-10 text-xl font-semibold text-text md:text-2xl">
          五、課程內容（Content）
        </h3>
        <ol className="mt-4 list-decimal space-y-4 pl-5">
          <li>
            海靈格家族排列與組織排列的起源與發展
            <span className="mt-1 block text-sm text-muted">
              The Origins Story of Hellinger Family, and Organizational
              Constellations
            </span>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>古典排列（Classical Constellations）</li>
              <li>
                介紹靈魂動力排列（Movements of the
                Soul）與精神動力排列（Movements of Spirit Constellations）
              </li>
            </ul>
          </li>
          <li>
            海靈格所提出的三種「靈魂」與「意識」
            <span className="mt-1 block text-sm text-muted">
              Hellinger’s Three “Souls”, “Consciousnesses”
            </span>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>個人靈魂（Individual Soul）</li>
              <li>家族靈魂（Family Soul）</li>
              <li>更大的靈魂／超越性的靈魂（Greater / Beyond）</li>
              <li>場域（Field）</li>
            </ul>
          </li>
          <li>
            愛的序位（Orders of Love）
            <p className="mt-2">
              在祖先、原生家庭、伴侶關係、成年後的家庭關係，以及個人靈魂中運作的隱性邏輯、規則與模式。
            </p>
          </li>
          <li>
            組織排列的核心原則（Tenets of Organizational Constellations）
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                商業／企業排列（Business or Enterprise Constellations）
              </li>
              <li>
                在人與人所組成的組織中運作的隱性邏輯、規則與模式。
              </li>
            </ul>
          </li>
          <li>
            形態生成場（Morphogenic Fields）—— Rupert Sheldrake
            <p className="mt-2">
              家庭與人類組織運作時所處的非尋常媒介與場域。
            </p>
          </li>
          <li>
            排列的架構與進行流程
            <span className="mt-1 block text-sm text-muted">
              Constellation Structure and Process
            </span>
          </li>
          <li>
            代表
            <span className="mt-1 block text-sm text-muted">Representation</span>
          </li>
          <li>
            個案訪談
            <span className="mt-1 block text-sm text-muted">
              Client Interview
            </span>
          </li>
          <li>
            未完成的動作
            <span className="mt-1 block text-sm text-muted">
              Incomplete Reaching Out Movement
            </span>
          </li>
          <li>
            能量與場域感知訓練
            <span className="mt-1 block text-sm text-muted">
              Energy and Non-Ordinary Perception Training
            </span>
          </li>
          <li>
            個人靈性成長與能量發展學
            <span className="mt-1 block text-sm text-muted">
              Personal and Energetic Development
            </span>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>預設前提（Presuppositions）</li>
              <li>安地斯神秘學（Andean Mysticism）</li>
              <li>
                人的三個層面（Three Realms of a Person）：身體層面（Physical
                Body）、心理層面（Psychological）、能量層面（Energetic）
              </li>
            </ul>
          </li>
        </ol>
        <p className="mt-4">
          同時、Stephen老師將依照課程進行中場域的需求、同步加入其他合適的教學內容。
        </p>
      </Section>

      <Section id="terms" title="課程條款與規範" tone="surface">
        <p>
          成為具備專業能力的系統排列師、需持續投入個人成長的歷程、做出必要的改變、療癒自己、並逐漸成為自己此生所要成為的人……進而實現自己生命的目的。
        </p>
        <p>
          為了朝這個方向前進，Stephen
          老師對所有學員有以下期待：展現合乎人性尊嚴的待人處事態度、同理與體恤、慈悲心，以及真誠而坦率的善意。
        </p>
        <BulletList
          items={[
            '給予自己與給予他人同等程度的關愛與照顧。',
            '持續超越原生家庭的教養方式、所接受的教育與訓練，以及成長過程中所內化的文化影響。',
            '逐漸活出宇宙在生命中所意欲成就的自己。',
            '放下對所有他人，以及對自己的批判、評斷與偏見。',
            '學習調節自己的情緒。',
            '開始愛上生命。',
            '開始愛上這個世界。',
            '開始愛上人類。',
            '開始信任自己，並相信自己的能力。',
            '全心全意地朝向充分展現自己的個人力量、內在力量與自主性前進，同時尊重他人與這個世界。',
            '學習對生命當下的實相說「Yes」，學習接納並允許一切如其所是（Consent to What IS），而不是抗拒它。',
            '在有必要時，學習為自己認為重要的事而奮鬥，而不是一味地與事物對抗。',
            '學習、理解、內化並實際展現本培訓研習所提出的各項預設前提。',
            '課程進行期間，手機必須關機，休息時間除外。',
          ]}
        />

        <h3 className="mt-10 text-xl font-semibold text-text md:text-2xl">
          特別注意事項（SPECIAL NOTE）
        </h3>
        <p className="mt-4">
          系統排列師不得為自己進行家族排列、也不得為自己的家庭成員設置家族排列；同樣地、也不得為自己任職的工作場所進行組織排列。
        </p>
        <p>
          為什麼？因為你有意識層面的理解與認知、將會妨礙你接收「場域」（Field）所傳遞的資訊。因此，這樣進行的排列將無法帶來任何正向的改變。
        </p>

        <h3 className="mt-10 text-xl font-semibold text-text md:text-2xl">
          學習夥伴
        </h3>
        <p className="mt-4">
          每位學員將有兩位學習夥伴（Study
          Partners），並同意至少每個月在線上或實體聚會一次，以促進彼此的成長、學習與發展。
        </p>

        <h3 className="mt-10 text-xl font-semibold text-text md:text-2xl">
          個人隱私與保密義務
        </h3>
        <p className="mt-4">
          在培訓過程中、將包含學員個人生命議題排列、學員的個人生活、成年後的家庭與原生家庭，以及工作狀況等私人資訊，可能會讓其他學員知悉。
        </p>
        <p>
          所有學員均同意，對於課程中所揭露的任何個人及私人資訊，都必須嚴格保密，不得對外透露。此外，建議學員在課程結束後，放下所有他人分享的個人資訊，不再記掛或帶入自己的日常生活。
        </p>

        <h3 className="mt-10 text-xl font-semibold text-text md:text-2xl">
          課後作業
        </h3>
        <p className="mt-4">學員同意完成培訓過程中所指定的各項作業。</p>
        <p className="mt-4 font-medium">作業一（Homework Assignment One）</p>
        <p>在培訓的前六個月，學員同意無條件地善待：</p>
        <BulletList
          items={[
            '自己',
            '所有其他人',
            '所發生的事件',
            '所面對的各種情況',
          ]}
        />

        <h3 className="mt-10 text-xl font-semibold text-text md:text-2xl">
          課程錄音與著作權
        </h3>
        <p className="mt-4">
          本培訓課程將由 Stephen Victor
          進行錄音。課程內容的著作權歸 Stephen Victor
          所有，錄音內容不開放給學員。學員不得以任何形式自行錄音或錄影，無論是課程的全部或部分內容。
        </p>
        <p>
          報名表內的課程介紹、為期十個月的培訓課程大綱及課程內容均受版權保護，版權歸
          Stephen Victor
          所有、未經著作權持有者的同意，任何人不得擅自翻印、重製、改編或散布其全部或部分內容。
        </p>
      </Section>

      <Section id="certification" title="證書相關">
        <h3 className="text-xl font-semibold text-text md:text-2xl">
          「系統排列師培訓課程出席證明」條款與規範
        </h3>
        <p className="mt-4">
          學員若欲取得系統排列師培訓課程出席證明、須符合以下要求：
        </p>
        <NumberedList
          items={[
            '出席所有課程時段（共三十天）。',
            '缺席規定：學員最多可缺席三天、但必須與其他學員會面習得缺席課程內容、並向 Stephen 老師 證明自己已充分了解缺席期間所教授的內容。',
            '在整個培訓期間、學員須親自參與、保持專注、並充分投入課程。',
            '完成課後作業、並將課程所提出的預設前提融入自身生活，實際活出這些理念。',
            '不需要獨立完成個案排列。',
          ]}
        />

        <h3 className="mt-10 text-xl font-semibold text-text md:text-2xl">
          「系統排列師專業認證書」條款與規範
        </h3>
        <p className="mt-4">
          學員若要取得系統排列師專業認證，需接受以下各項評量與考核：
        </p>
        <NumberedList
          items={[
            '出席所有課程時段（共三十天）。',
            '缺席規定：學員最多可缺席三天，但必須與其他學員會面習得缺課內容，並向 Stephen老師 證明自己已充分了解缺席期間所教授的內容。',
            '完成所有課後作業。',
            '在培訓過程中，有意識地維持良好、穩定且能為團體帶來全心參與的貢獻。',
            '在培訓過程中，有意識地管理自己的注意力。',
            '展現已將課程所提出的預設前提，整合進個人的世界觀與宇宙觀、對世界的認知與理解模式，以及自身的價值觀與信念體系之中，並且能在行為上實際展現這些整合成果。',
            '證明已學會海靈格古典排列的結構、模式與愛的序位，以及組織排列的基本原則。',
            '展現感知能量場域的能力。',
            '獨立成功完成個案排列，至少具備初階的排列能力。',
            '展現不帶批判與評斷、合乎人性尊嚴的待人處事態度。',
          ]}
        />
      </Section>

      <Section id="teacher" title="Stephen老師資歷介紹" tone="surface">
        <p>
          1994 年 6 月，Stephen老師創立了 Stephen Victor,
          Inc.，一家專注於軟實力（Soft
          Skills）的顧問公司，致力於個人成長/轉化、客製化企業培訓＆諮詢、已有超過40年經驗。
        </p>
        <p>
          1999年、Stephen老師通過海靈格家族與企業排列培訓成為系統排列師、除了個人的家族排列外、Stephen老師也將其運用於高階主管培訓，以及協助組織推動改變的工作之中。
        </p>
        <p>
          工作遍及美洲、英國、歐洲、黎凡特地區、中東及東亞，共23個國家、服務對象包括公開招募的團體與企業組織，提供高階主管教練、企業內部培訓及閉關式研習等服務。
        </p>
        <p>Stephen老師提供的服務包含：</p>
        <BulletList
          items={[
            '海靈格家族排列與企業排列',
            '家族、系統與企業排列師培訓課程',
            '客製化高階主管教練、導師指導與諮詢',
            '協助團隊、部門及組織推動文化轉型',
            '依不同情境與需求量身設計的思考與行為技能諮詢及培訓',
            '衝突解決與調解',
            '一對一教練與改變工作（ChangeWork）',
          ]}
        />
        <h3 className="mt-10 text-xl font-semibold text-text md:text-2xl">
          專業證書與認證
        </h3>
        <BulletList
          items={[
            '海寧格家族資深系統排列師 | 培訓師',
            '神經語言學高階執行師 | 培訓師',
            '艾瑞克森催眠治療師',
          ]}
        />
      </Section>

      <Section id="enroll" title="報名相關">
        <dl className="space-y-4">
          <div>
            <dt className="font-medium text-primary">日期</dt>
            <dd className="mt-1">
              2027、每月三天、十個月、共三十天
            </dd>
          </div>
          <div>
            <dt className="sr-only">課表</dt>
            <dd>
              <ul className="space-y-2">
                {schedule.map((row) => (
                  <li key={row.month} className="flex gap-3">
                    <span className="w-16 shrink-0 font-medium text-primary">
                      {row.month}
                    </span>
                    <span>{row.days}</span>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
          <div>
            <dt className="font-medium text-primary">時間</dt>
            <dd className="mt-1">9:30-16:30</dd>
          </div>
          <div>
            <dt className="font-medium text-primary">地點</dt>
            <dd className="mt-1">台北市松山區健康路185巷12號1樓</dd>
          </div>
          <div>
            <dt className="font-medium text-primary">交通</dt>
            <dd className="mt-1">南京三民站一號出口、步行約8分鐘</dd>
          </div>
          <div>
            <dt className="font-medium text-primary">講師</dt>
            <dd className="mt-1">
              Stephen Victor，搭配家排師中文同步口譯
            </dd>
          </div>
          <div>
            <dt className="font-medium text-primary">費用</dt>
            <dd className="mt-1 space-y-1">
              <p>舊生｜NTD 248,000/人</p>
              <p>新生｜NTD 268,000/人</p>
            </dd>
          </div>
          <div>
            <dt className="font-medium text-primary">名額</dt>
            <dd className="mt-1">
              20人額滿、未滿8人不開班（依匯款時間順序排定報名序號）
            </dd>
          </div>
          <div>
            <dt className="font-medium text-primary">其他</dt>
            <dd className="mt-1">
              如遇颱風或其他不可抗力之因素、導致無法如期上課、將視狀況改為線上或是另擇日補課、對於上課日期與場地的相關調整、本活動單位保留最終變更之權利。
            </dd>
          </div>
        </dl>

        <h3 className="mt-10 text-xl font-semibold text-text md:text-2xl">
          報名相關說明
        </h3>
        <p className="mt-4 text-sm text-muted">
          本頁僅呈現資訊並導向官方
          Line，不做線上送出表單。
        </p>
        <p className="mt-4">
          <span className="font-medium">舊生：</span>
          參加過工作坊或一對一、不含公益坊
        </p>
        <p>
          <span className="font-medium">新生：</span>
          含只參加過公益坊
        </p>

        <h4 className="mt-8 text-lg font-semibold text-text">
          「舊生」繳費說明
        </h4>
        <NumberedList
          items={[
            '訂金$48,000: 12/5/2026前繳清、方完成報名手續。剩餘款項待確認開班後、收到官方Line通知後再繳交。若未達開課人數、訂金將原數退還。',
            '剩餘款項: 可選擇一次付清 or 分期付款：A. 一次付清：2/15/2027前繳清剩餘$200,000。B. 分四期付：每期$50,000, 每期請於2/15、5/10、8/10、11/10/2027前繳清。',
          ]}
        />

        <h4 className="mt-8 text-lg font-semibold text-text">
          「新生」繳費說明
        </h4>
        <NumberedList
          items={[
            '訂金$48,000: 12/5/2026前繳清、方完成報名手續。剩餘款項待確認開班後、收到官方Line通知後再繳交。若未達開課人數、訂金將原數退還。',
            '剩餘款項: 可選擇一次付清 or 分期付款。A. 一次付清：2/15/2027前繳清剩餘$200,000。B. 分四期付：每期$55,000, 每期請於2/15、5/10、8/10、11/10/2027前繳清。',
          ]}
        />

        <h4 className="mt-8 text-lg font-semibold text-text">
          報名時請準備告知官方 Line 的資料
        </h4>
        <BulletList
          items={[
            '舊生／新生',
            '繳費選項（一次付清／分期）',
            '姓名（中文＋英文名）',
            '手機、Email',
            '如何得知此課程（官方Line／粉絲頁／朋友推薦／其他）',
            '發票：二聯／三聯（三聯需公司名稱＋統編）',
          ]}
        />

        <h4 className="mt-8 text-lg font-semibold text-text">匯款帳號</h4>
        <p className="mt-4">銀行代碼：008 （華南銀行）</p>
        <p>銀行帳號：112-10-1202760</p>
        <p className="text-sm text-muted">（依匯款時間排定報名序號）</p>

        <h4 className="mt-8 text-lg font-semibold text-text">
          取消／退費條款
        </h4>
        <BulletList
          items={[
            '本培訓課程為期十個月、為確保已報名學員上課權益、請確認可參加日期再報名、謝謝。',
            '報名完成後欲取消者、於2026/12/31前提出，可退90%已繳費用。',
            '報名完成後欲取消者，於開課六十天前（不包含開課當日）提出、可退80%已繳費用。',
            '報名完成後欲取消者，於開課三十天前（不包含開課當日）提出、可退70%已繳費用。',
            '報名完成後欲取消者，於開課十四天前（不包含開課當日）提出、可退50%已繳費用。',
            '課程開始後、因故無法繼續課程者、在扣除已發生的課程天數後、可退70%已繳剩餘費用。',
            '課程期間無法出席者、恕不予退費（含請假）。',
            '主辦單位保有最終修改、變更、活動解釋及取消本活動之權利。',
          ]}
        />
      </Section>

      <section
        id="line"
        className="border-t border-border bg-primary py-16 text-surface md:py-24"
      >
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h2 className="font-serif text-2xl font-bold md:text-3xl">
            官方 Line
          </h2>
          <p className="mt-3 text-secondary">ID: {LINE_ID}</p>
          <ul className="mt-8 list-disc space-y-3 pl-5 text-surface/90">
            <li>
              請於匯款後傳送您的姓名＋後五碼至官方Line、我們才看得到您喔。
            </li>
            <li>待收到官方Line 報名確認函、方完成報名手續。</li>
            <li>所有工作坊相關事宜皆由官方Line 通知。</li>
            <li>如有任何疑問、歡迎於官方Line 詢問。</li>
          </ul>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <LineCta variant="surface" label="開啟官方 Line" />
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-secondary underline-offset-4 hover:underline"
            >
              {LINE_ID}
            </a>
          </div>
          <p className="mt-10 font-serif text-lg text-surface/95">
            期待與您在培訓課中相見！
          </p>
        </div>
      </section>

      <footer className="border-t border-border bg-bg py-8">
        <div className="mx-auto flex max-w-3xl flex-col gap-2 px-4 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8">
          <p>系統排列師培訓課｜Stephen Victor</p>
          <p>課程內容著作權歸 Stephen Victor 所有</p>
        </div>
      </footer>
    </div>
  )
}
