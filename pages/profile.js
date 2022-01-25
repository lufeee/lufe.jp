import Layout from "../components/Layout";

export default function Profile () {
    return (
      <Layout title="Profile">
        <p className="text-4xl text-blue-400">Profile</p>
        <div className="container flex flex-wrap justify-center items-center mx-auto my-4 px-4">
          <tbody>
            <tr className="border-b">
              <td colSpan={99} className="px-2 py-2">
                <h2 className="text-3xl text-pink-400">Affiliation</h2>
              </td>
            </tr>
            <tr className="border-b text-lg">
              <td className="px-2 py-2">2017/04 - 2020/03</td>
              <td className="px-2 py-2">Hamamatsu Kaiseikan High school</td>
            </tr>
            <tr className="border-b text-lg">
              <td className="px-2 py-2">2020/04 - Present</td>
              <td className="px-2 py-2">Ritsumeikan University : Security NetWork</td>
            </tr>

            <tr className="border-b">
              <td colSpan={99} className="px-2 py-2">
                <h2 className="text-3xl text-pink-400">Experience</h2>
              </td>
            </tr>
            <tr className="border-b text-lg">
              <td className="px-2 py-2">2020/10 - 2020/12</td>
              <td className="px-2 py-2">Security Camp 全国大会 2020 : D Track Student</td>
            </tr>
            <tr className="border-b text-lg">
              <td className="px-2 py-2">2021/07 - 1 day</td>
              <td className="px-2 py-2">MINI Hardening Project #4.0</td>
            </tr>
            <tr className="border-b text-lg">
              <td className="px-2 py-2">2021/08 - 2021/10</td>
              <td className="px-2 py-2">Security Camp 全国大会 2021 : D Track Tutor</td>
            </tr>
            <tr className="border-b text-lg">
              <td className="px-2 py-2">2021/10 - 2021/11</td>
              <td className="px-2 py-2">Mini Security Camp 2021 : Student & Tutor</td>
            </tr>
            <tr className="border-b text-lg">
              <td className="px-2 py-2">2021/11 - 1 day</td>
              <td className="px-2 py-2">NRI Secure SANS NetWars CTF 2021 25th</td>
            </tr>
            <tr className="border-b text-lg">
              <td className="px-2 py-2">2021/11 - 4 day</td>
              <td className="px-2 py-2">Hardening Project Active Fault</td>
            </tr>
            <tr className="border-b text-lg">
              <td className="px-2 py-2">2021/05 - Present</td>
              <td className="px-2 py-2">SecHack365 2021 表現駆動 : Trainee</td>
            </tr>
            <tr className="border-b text-lg">
              <td className="px-2 py-2">2021/07 - Present</td>
              <td className="px-2 py-2">脆弱性診断士</td>
            </tr>
            <tr className="border-b text-lg">
              <td className="px-2 py-2">2022/01 - Present</td>
              <td className="px-2 py-2">CA Tech Accel Backend</td>
            </tr>
           

            <tr className="border-b">
              <td colSpan={99} className="px-2 py-2">
                <h2 className="text-3xl text-pink-400">Certificate</h2>
              </td>
            </tr>
          </tbody>
        </div>
      </Layout>
    );
}
