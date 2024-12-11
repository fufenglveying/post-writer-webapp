React（react-hook-form） + Next.js + TypeScript + Tailwind CSS + App Router技術スタックで不明品登録機能を実装している。

■要望
添付されたソースコードに基づき、テスト仕様書を作成してください。
・対象機種：DIGNO BX2
・まず正常系の内容を以下項目でCSVで作成してください。
 　No.	、機能（大分類）、	機能（中分類）、	操作（条件）、	期待値	
例を添付します。参考にしてください。
   

■下記ディレクトリ構造に基づいて改修お願いします。
my-app/
├── node_modules/
├── public/
├── src/
│   ├── app/
│   │   ├── unknown-item-register/
│   │   │   ├── confirmation/
│   │   │   │   ├── loading.tsx　　
│   │   │   │   ├── page.tsx　　　//src\app\unknown-item-register\confirmation\page.tsx
│   │   │   │   ├── layout.tsx　 //src\app\unknown-item-register\confirmation\layout.tsx
│   │   │   ├── loading.tsx　　//src\app\unknown-item-register\loading.tsx
│   │   │   ├── page.tsx　　　//src\app\unknown-item-register\page.tsx
│   │   │   ├── layout.tsx　//src\app\unknown-item-register\layout.tsx
│   ├── features/
│   │   │   ├── unknown-item-register/
│   │   │   │   ├── register-form-with-AITag-ui-v8.tsx  //src\features\unknown-item-register\register-form-with-AITag-ui-v8.tsx
│   │   │   │   ├── unknown-item-confirmation.tsx //src\features\unknown-item-register\unknown-item-confirmation.tsx
│   │   │   │   ├── register-result-dialog.tsx //src\features\unknown-item-register\register-result-dialog.tsx
│   │   │   │   ├── unknown-item-context.tsx //src\features\unknown-item-register\unknown-item-context.tsx
│   │   │   │   ├── unknown-item-register-services/
│   │   │   │   │   ├── unknown-item-register-service.ts //src\features\unknown-item-register\unknown-item-register-services\unknown-item-register-services.ts //src\features\unknown-item-register\unknown-item-register-services\unknown-item-register-services.ts


■ローカルソースコードも確認してください。
！注意事項：元のソースコードのコメントを削除しないでください。

//src\app\unknown-item-register\page.tsx

import { Card } from "@/components/ui/card";
import dynamic from 'next/dynamic';
import { RegisterFormUI } from "@/features/unknown-item-register/register-form-ui";
//import { RegisterFormWithAITagUI } from "@/features/unknown-item-register/registerFormWithAITagUI";
//import { RegisterFormWithAITagUI } from "@/features/unknown-item-register/registerFormWithAITagUI-v1";//画像・タグのみ 
//import { RegisterFormWithAITagUI } from "@/features/unknown-item-register/registerFormWithAITagUI-v2";//チェックボックスをありのみにする
//import { RegisterFormWithAITagUI } from "@/features/unknown-item-register/registerFormWithAITagUI-v3";//最新版チェックボックスをありのみにする
//import { RegisterFormWithAITagUI } from "@/features/unknown-item-register/registerFormWithAITagUI-v4";//最新版チェックボックスをありのみにする
//import { RegisterFormWithAITagUI } from "@/features/unknown-item-register/register-form-with-AITag-ui";//確認ページにデータを渡す
//import { RegisterFormWithAITagUI } from "@/features/unknown-item-register/register-form-with-AITag-ui-v1";//mainImage → subImage1 → subImage2 → subImage3 の順序で画像のアップロード
//import { RegisterFormWithAITagUI } from "@/features/unknown-item-register/register-form-with-AITag-ui-v2";//前入力したデータを保持した状態で戻る
//import { RegisterFormWithAITagUI } from "@/features/unknown-item-register/register-form-with-AITag-ui-v3";//画像削除時の不自然な挙動を改善する
//import { RegisterFormWithAITagUI } from "@/features/unknown-item-register/register-form-with-AITag-ui-v4";//送信処理①
//import { RegisterFormWithAITagUI } from "@/features/unknown-item-register/register-form-with-AITag-ui-v5";//送信処理②
import { RegisterFormWithAITagUI } from "@/features/unknown-item-register/register-form-with-AITag-ui-v6";//imageType追加

export default async function Home() {
  return (
    // p-4 h-full relative flex-1 overflow-hidden rounded-none items-center flex flex-col gap-6 bg-slate-100
    <Card className="p-4 h-full relative flex-1 overflow-hidden rounded-none items-center flex flex-col gap-6 bg-slate-100">
      {/* <RegisterFormUI /> */}
      <RegisterFormWithAITagUI />
    </Card>
  );
}




//src\app\unknown-item-register\layout.tsx
import { HeaderMenu } from "@/components/header-menu";
import { APP_NAME } from "@/features/theme/customise";

export const metadata = {
  title: APP_NAME,
  description: APP_NAME,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col flex-1">
        <HeaderMenu title="不明品登録"/>
        {children}
      </div>
    </>
  );
}


//src\app\unknown-item-register\confirmation\page.tsx
import { Card } from "@/components/ui/card";
import { UnknownItemConfirmation } from "@/features/unknown-item-register/unknown-item-confirmation";

export default function ConfirmationPage() {
  return (
    // p-4 h-full relative flex-1 overflow-hidden rounded-none items-center flex flex-col gap-6 bg-slate-100
    <Card className="p-4 h-full relative flex-1 overflow-y-auto rounded-none items-center flex flex-col gap-6 bg-slate-100">
      <UnknownItemConfirmation />
    </Card>
  );
}


//src\app\unknown-item-register\confirmation\loading.tsx
import { LoadingSkeleton } from "@/features/loading-skeleton";

export default function Loading() {
  return <LoadingSkeleton />;
}

// src/app/unknown-item-register/confirmation/layout.tsx

import { HeaderMenu } from "@/components/header-menu";
import { APP_NAME } from "@/features/theme/customise";

export const metadata = {
  title: APP_NAME,
  description: APP_NAME,
  //   title: `${APP_NAME} - 不明品登録確認`,
//   description: `${APP_NAME} - 不明品登録確認画面`,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col flex-1">
        {children}
      </div>
    </>
  );
}


//src\features\unknown-item-register\register-form-with-AITag-ui-v8.tsx
//画像添付時の画像セクション表示変更

"use client"
import { FC, useState, useEffect } from "react";
import React from "react";
import { useForm, useFieldArray, useWatch, Control, Controller } from "react-hook-form";
import { ja } from "date-fns/locale/ja";
import { LocalizationProvider, MobileDatePicker, MobileDateTimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { Button as MyButton } from "@/components/ui/button";
import LoadingButton from '@mui/lab/LoadingButton';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, CirclePlus, CircleX, Image, ImageOff, ImageUp, MapPinned, Package, Pen, PersonStanding, Phone, Scale, Tag, Camera } from "lucide-react";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { convertToBase64, fetcher } from "@/features/search-by-day/getTagsFromAzureOpenAIAPI"
import { z } from "zod";
import { useGlobalMessageContext } from "../global-message/global-message-context";
import { zodResolver } from '@hookform/resolvers/zod';
import { format, parse } from "date-fns";
import { useRouter } from "next/navigation";
import { CircularProgress, Select, MenuItem, FormControl, InputLabel, TextField, RadioGroup, FormControlLabel, Radio, Checkbox, FormGroup, Hidden } from "@mui/material";
import { Textarea } from "@/components/ui/textarea";
import { VisuallyHiddenInput, dateTimePickerStyle, getTagsFromAzureOpenAIAPI } from "@/features/unknown-item-register/unknown-item-register-services/unknown-item-register-services"
import { TextareaAutoSized } from "@/features/ai-summary/textarea-autosized"
import { useUnknownItem, UnknownItemData } from "@/features/unknown-item-register/unknown-item-context";
import { fetchCommonInfo, validateCommonInfo } from "@/features/unknown-item-register/unknown-item-register-services/unknown-item-register-services";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const IMAGE_TYPES = ["image/png", "image/jpeg"];


// Validation用のスキーマ
const schema = z.object({
  //セッション1: 不明品発見情報
  foundDate: z.date().refine(date => date instanceof Date, { message: "発見日は必須です" }),//発見日
  tenCd: z.string().regex(/^\d{4}$/, "4桁の半角数字で入力してください"),//発見店コード
  foundPlace: z.string().max(100, "100文字以内で入力してください").optional(),//発見場所
  foundById: z.string().regex(/^\d{7}$/, "7桁の半角数字で入力してください"),//発見者コード
  entryById: z.string().regex(/^\d{7}$/, "7桁の半角数字で入力してください"),//入力者コード

  // branch: z.string().regex(/^\d{4}$/, "4桁の半角数字で入力してください").optional(),
  // entryDate: z.date().optional(),//入力日

  // セッション3: 不明品商品情報
  hasExpiryDate: z.boolean().default(false),
  expiryDate: z.date().nullable(),
  comments: z.string().max(500, "500文字以内で入力してください").optional(),

  // セッション2: 不明品画像情報  
  // mainImage: z.custom<FileList>().optional(),
  // subImage1: z.custom<FileList>().optional(),

  mainImage: z.custom<FileList>()
    .optional()
    .refine(files => {
      // filesがnullまたはundefinedの場合は検証をスキップ
      if (!files) return true;
      return files.length <= 1;
    }, "1つの画像のみアップロード可能です")
    .refine(files => {
      if (!files) return true;
      return Array.from(files).every(file => IMAGE_TYPES.includes(file.type));
    }, "添付できる画像ファイルはjpegかpngです")
    .refine(files => {
      if (!files) return true;
      return Array.from(files).every(file => file.size <= MAX_FILE_SIZE);
    }, `画像ファイルのサイズは最大${MAX_FILE_SIZE / (1024 * 1024)}MBまでです`),

  subImage1: z.custom<FileList>()
    .optional()
    .refine(files => {
      if (!files) return true;
      return files.length <= 1;
    }, "1つの画像のみアップロード可能です")
    .refine(files => {
      if (!files) return true;
      return Array.from(files).every(file => IMAGE_TYPES.includes(file.type));
    }, "添付できる画像ファイルはjpegかpngです")
    .refine(files => {
      if (!files) return true;
      return Array.from(files).every(file => file.size <= MAX_FILE_SIZE);
    }, `画像ファイルのサイズは最大${MAX_FILE_SIZE / (1024 * 1024)}MBまでです`),

  subImage2: z.custom<FileList>()
    .optional()
    .refine(files => {
      if (!files) return true;
      return files.length <= 1;
    }, "1つの画像のみアップロード可能です")
    .refine(files => {
      if (!files) return true;
      return Array.from(files).every(file => IMAGE_TYPES.includes(file.type));
    }, "添付できる画像ファイルはjpegかpngです")
    .refine(files => {
      if (!files) return true;
      return Array.from(files).every(file => file.size <= MAX_FILE_SIZE);
    }, `画像ファイルのサイズは最大${MAX_FILE_SIZE / (1024 * 1024)}MBまでです`),

  subImage3: z.custom<FileList>()
    .optional()
    .refine(files => {
      if (!files) return true;
      return files.length <= 1;
    }, "1つの画像のみアップロード可能です")
    .refine(files => {
      if (!files) return true;
      return Array.from(files).every(file => IMAGE_TYPES.includes(file.type));
    }, "添付できる画像ファイルはjpegかpngです")
    .refine(files => {
      if (!files) return true;
      return Array.from(files).every(file => file.size <= MAX_FILE_SIZE);
    }, `画像ファイルのサイズは最大${MAX_FILE_SIZE / (1024 * 1024)}MBまでです`),
  tags: z.array(z.object({
    tag: z.string().min(1, { message: "50文字以内で入力してください" })
      .max(50, { message: "50文字以内で入力してください" })
  })),
})
  .refine(
    (data) => {
      // hasExpiryDateが true の場合は、expiryDate が必須
      if (data.hasExpiryDate) {
        return data.expiryDate !== null;
      }
      // hasExpiryDateが false の場合は、expiryDate が null でもOK
      return true;
    },
    {
      message: "賞味期限の日付を選択してください。",
      path: ["expiryDate"], // エラーメッセージを表示するフィールド
    }
  );
// .refine(
//   (data) => {
//     // 有効な画像の数をカウント（undefined でないものをカウント）
//     const images = [data.mainImage, data.subImage1, data.subImage2, data.subImage3];
//     // const validImageCount = images.filter(img => img && img.length > 0).length;
//     const validImageCount = images.filter(img => img !== undefined && img?.length > 0).length;

//     // 最低2枚の画像が必要
//     return validImageCount >= 2;
//   },
//   {
//     message: "少なくとも2枚の画像をアップロードしてください",
//     path: ["mainImage"] // エラーメッセージをメイン画像フィールドに表示
//   }
// )


type FormData = z.infer<typeof schema>;

type ImageField = {
  label: string;// フィールドのラベル（表示名）
  required: boolean;// フィールドが必須かどうかを示すフラグ
  state: File | null;// 現在の画像ファイルの状態。ファイルが選択されていない場合は null
  setter: React.Dispatch<React.SetStateAction<File | null>>;// 画像ファイルの状態を更新するための関数
  fieldName: keyof FormData;// フォームデータ内でのこのフィールドの名前
  loading: boolean;// 画像の読み込み中かどうかを示すフラグ
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;// loading 状態を更新するための関数
  error: string | null;// エラーメッセージ。エラーがない場合は null
  setError: React.Dispatch<React.SetStateAction<string | null>>;// error 状態を更新するための関数
  tags: string[];// 画像に関連付けられたタグのリスト
  setTags: React.Dispatch<React.SetStateAction<string[]>>; // tags を更新するための関数
};

export const RegisterFormWithAITagUI: FC = () => {
  // 画像とタグのステート
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [subImage1, setSubImage1] = useState<File | null>(null);
  const [subImage2, setSubImage2] = useState<File | null>(null);
  const [subImage3, setSubImage3] = useState<File | null>(null);

  const [mainLoading, setMainLoading] = useState(false);
  const [sub1Loading, setSub1Loading] = useState(false);
  const [sub2Loading, setSub2Loading] = useState(false);
  const [sub3Loading, setSub3Loading] = useState(false);

  const [mainError, setMainError] = useState<string | null>(null);
  const [sub1Error, setSub1Error] = useState<string | null>(null);
  const [sub2Error, setSub2Error] = useState<string | null>(null);
  const [sub3Error, setSub3Error] = useState<string | null>(null);

  const [mainTags, setMainTags] = useState<string[]>([]);
  const [sub1Tags, setSub1Tags] = useState<string[]>([]);
  const [sub2Tags, setSub2Tags] = useState<string[]>([]);
  const [sub3Tags, setSub3Tags] = useState<string[]>([]);

  // 全てのタグを保持するための状態を追加
  const [allTags, setAllTags] = useState<string[]>([]);

  const [subImages, setSubImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false); // ローディング状態追加
  const [error, setError] = useState<string | null>(null); // エラー状態追加
  const [hasExpiryDate, setHasExpirationDate] = useState<"yes" | "no">("no");

  // 登録ボタンローディング
  const [registerBtnLoading, setRegisterBtnLoading] = useState(false);

  //各画像フィールドの処理状態を追跡
  const [imageProcessingStatus, setImageProcessingStatus] = useState({
    mainImage: false,
    subImage1: false,
    subImage2: false,
    subImage3: false
  });

  // フォームの自動送信を防ぐためのフラグ
  const [isManualSubmit, setIsManualSubmit] = useState(false);

  // 画像処理中かどうかを示す単一のフラグ
  const [isProcessingImage, setIsProcessingImage] = useState(false);

  //コンテキストからのデータを設定用
  const { unknownItemData, setUnknownItemData } = useUnknownItem();

  //フォームリセット用
  const { shouldResetForm, setShouldResetForm } = useUnknownItem();

  // マスタバリエーションエラーエラーメッセージの状態管理を追加
  const [validationError, setValidationError] = useState<string | null>(null);

  // トースト
  const { showError } = useGlobalMessageContext();

  // RHフォーム
  const { register, //フォームフィールドの登録
    handleSubmit, // フォームフィールドの登録
    reset,// // フォームリセット
    control,// フォームコントロール 
    formState: { errors },//バリデーションエラー状態
    watch,//フィールド値の監視
    setValue,//フィールド値の設定
    getValues// 現在のフォーム値の取得
  } = useForm<FormData>({
    resolver: zodResolver(schema),// Zodによるバリデーション
    mode: 'onSubmit',// バリデーションのタイミング
    defaultValues: {// フォームのデフォルト値
      foundDate: new Date(),
      // entryDate: new Date(),
      expiryDate: null,
      hasExpiryDate: false
    }
  });

  // Router
  const router = useRouter();

  // チェックボックスの状態変更ハンドラー
  const handleCheckboxChange = (name: string, onChange: (value: boolean) => void) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.checked;
      onChange(newValue);
      if (!newValue) {
        // 賞味期限なしの場合、expiryDateをnullに設定
        setValue('expiryDate', null);
      }
    };
  };

  // 画像アップロードフィールドの設定
  // 各画像フィールドの状態管理（メイン画像と3つのサブ画像）
  const imageFields: ImageField[] = [
    { label: "画像1", required: true, state: mainImage, setter: setMainImage, fieldName: "mainImage", loading: mainLoading, setLoading: setMainLoading, error: mainError, setError: setMainError, tags: mainTags, setTags: setMainTags },
    { label: "画像2", required: true, state: subImage1, setter: setSubImage1, fieldName: "subImage1", loading: sub1Loading, setLoading: setSub1Loading, error: sub1Error, setError: setSub1Error, tags: sub1Tags, setTags: setSub1Tags },
    { label: "画像3", required: false, state: subImage2, setter: setSubImage2, fieldName: "subImage2", loading: sub2Loading, setLoading: setSub2Loading, error: sub2Error, setError: setSub2Error, tags: sub2Tags, setTags: setSub2Tags },
    { label: "画像4", required: false, state: subImage3, setter: setSubImage3, fieldName: "subImage3", loading: sub3Loading, setLoading: setSub3Loading, error: sub3Error, setError: setSub3Error, tags: sub3Tags, setTags: setSub3Tags },
  ];

  // Context からデータを読み込んでフォームに設定するための useEffect
  useEffect(() => {
    if (unknownItemData) {// unknownItemData が存在する場合のみ処理を実行
      setValue('foundDate', new Date(unknownItemData.foundDate));
      setValue('tenCd', unknownItemData.tenCd);
      setValue('foundPlace', unknownItemData.foundPlace);
      setValue('foundById', unknownItemData.foundById);
      setValue('entryById', unknownItemData.entryById);
      setValue('hasExpiryDate', unknownItemData.hasExpiryDate);
      setValue('expiryDate', unknownItemData.expiryDate ? new Date(unknownItemData.expiryDate) : null);// 賞味期限は存在する場合のみ Date オブジェクトに変換
      setValue('comments', unknownItemData.comments);

      // 画像処理状態を管理するオブジェクトを初期化
      const newImageProcessingStatus = {
        mainImage: false,
        subImage1: false,
        subImage2: false,
        subImage3: false
      };

      // 最後に処理した画像のインデックスを追跡
      let lastProcessedIndex = -1;

      unknownItemData.images.forEach((image, index) => {
        if (!image.imageUrl) return; // 画像URLが存在しない場合はスキップ
        const file = dataURLtoFile(image.imageUrl, `image${index}.jpg`);// 画像URLをファイルオブジェクトに変換

        if (!file) return; // ファイル変換に失敗した場合はスキップ

        // インデックスに応じて適切な画像スロットに設定
        if (index === 0) {
          setMainImage(file);
          setMainTags(image.tags);
          newImageProcessingStatus.mainImage = true;
          lastProcessedIndex = 0;
        } else if (index === 1) {
          setSubImage1(file);
          setSub1Tags(image.tags);
          newImageProcessingStatus.subImage1 = true;
          lastProcessedIndex = 1;
        } else if (index === 2) {
          setSubImage2(file);
          setSub2Tags(image.tags);
          newImageProcessingStatus.subImage2 = true;
          lastProcessedIndex = 2;
        } else if (index === 3) {
          setSubImage3(file);
          setSub3Tags(image.tags);
          newImageProcessingStatus.subImage3 = true;
          lastProcessedIndex = 3;
        }
      });

      // 次の画像のアップロードを有効にする
      if (lastProcessedIndex < 3) {
        const nextIndex = lastProcessedIndex + 1;
        switch (nextIndex) {
          case 1:
            newImageProcessingStatus.subImage1 = false;
            break;
          case 2:
            newImageProcessingStatus.subImage2 = false;
            break;
          case 3:
            newImageProcessingStatus.subImage3 = false;
            break;
        }
      }

      // 画像処理状態を更新
      setImageProcessingStatus(newImageProcessingStatus);

      // 各画像のタグ情報をフォームに追加
      unknownItemData.images.forEach((image) => {
        if (image.tags && image.tags.length > 0) {
          append({ tag: image.tags[0] });
        }
      });
    }
  }, [unknownItemData, setValue]);// unknownItemData または setValue が変更された時のみ実行

  // フォームのリセット処理を行うための useEffect
  useEffect(() => {
    if (shouldResetForm) {// リセットフラグが true の場合のみ実行
      // メイン画像と3つのサブ画像の状態をクリア
      setMainImage(null);
      setSubImage1(null);
      setSubImage2(null);
      setSubImage3(null);

      // メイン画像と3つのサブ画像に関連するタグ情報をクリア
      setMainTags([]);
      setSub1Tags([]);
      setSub2Tags([]);
      setSub3Tags([]);

      // 各画像のローディング状態をクリア（false = 非ローディング状態）
      setMainLoading(false);
      setSub1Loading(false);
      setSub2Loading(false);
      setSub3Loading(false);

      // エラー状態をクリア
      setMainError(null);
      setSub1Error(null);
      setSub2Error(null);
      setSub3Error(null);

      // 画像処理状態を初期状態にリセット
      // false = 画像処理が完了している/新しい画像をアップロード可能な状態
      setImageProcessingStatus({
        mainImage: false,
        subImage1: false,
        subImage2: false,
        subImage3: false
      });

      // フォームの全フィールドをデフォルト値にリセット
      reset({
        foundDate: new Date(),
        tenCd: "",
        foundPlace: "",
        foundById: "",
        entryById: "",
        hasExpiryDate: false,
        expiryDate: new Date(),
        comments: "",
        tags: [],
        // 画像フィールドを未定義状態に
        mainImage: undefined,
        subImage1: undefined,
        subImage2: undefined,
        subImage3: undefined,
      });

      // リセット処理完了後、リセットフラグを false に戻す
      setShouldResetForm(false);
    }
  }, [shouldResetForm, reset, setShouldResetForm]);// shouldResetForm,reset,setShouldResetForm の値が変更された時のみ実行  // 使用している全ての依存関係を含む


  //Base64エンコードされたデータURLを実際のFileオブジェクトに変換するユーティリティ関数
  //コンテキストからの画像復元に使用
  const dataURLtoFile = (dataurl: string | null, filename: string): File | null => {
    // データURLが null または undefined の場合は null を返す
    if (!dataurl) {
      return null;
    }

    try {
      const arr = dataurl.split(',');
      if (arr.length < 2) {
        return null;
      }

      // MIME タイプの取得
      const mimeMatch = arr[0].match(/:(.*?);/);
      if (!mimeMatch) {
        return null;
      }
      const mime = mimeMatch[1];

      // Base64 デコード
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }

      return new File([u8arr], filename, { type: mime });
    } catch (error) {
      console.error('Error converting data URL to File:', error);
      return null;
    }
  };

  // hasExpirationDateの値を監視
  const watchHasExpiryDate = watch("hasExpiryDate");

  // 動的入力欄
  const { fields, append, remove } = useFieldArray({ control, name: 'tags' });

  //画像表示タグの重複削除
  // const filterUniqueTags = (tags: string[], existingTags: string[]): string[] => {
  //   return tags.filter(tag => !existingTags.includes(tag));
  // }


  // メイン画像追加ハンドラー、同時にタグ生成
  const handleOnAddImageWithTag = async (
    file: File,
    setter: React.Dispatch<React.SetStateAction<File | null>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setError: React.Dispatch<React.SetStateAction<string | null>>,
    setTags: React.Dispatch<React.SetStateAction<string[]>>,
    imageField: keyof typeof imageProcessingStatus) => {
    if (!file) return;
    if (!IMAGE_TYPES.includes(file.type)) return;
    setLoading(true);
    setError(null);

    // 画像処理開始
    setIsProcessingImage(true);
    setLoading(true);
    setError(null);

    try {
      const tagsFromAPI = await getTagsFromAzureOpenAIAPI(file);
      setter(file);
      setTags(tagsFromAPI);

      // Get current images count to determine imageType
      const currentImages = [mainImage, subImage1, subImage2, subImage3].filter(img => img !== null);
      const imageType = currentImages.length * 10;  // 0, 10, 20, 30 based on position

      // FileListオブジェクトを作成
      const fileList = new DataTransfer();
      fileList.items.add(file);

      // フォームの値を更新
      setValue(imageField as keyof FormData, fileList.files);
      setAllTags(prev => [...prev, ...tagsFromAPI]);
      setImageProcessingStatus(prev => ({ ...prev, [imageField]: true }));
    } catch (error) {
      setError('タグ取得中にエラーが発生しました');
      console.error('タグ取得中にエラーが発生しました:', error);
    } finally {
      setLoading(false);
      setIsProcessingImage(false);//画像処理完了後に isProcessingImage を false にリセット
    }
  };

  // 写真撮影ボタンの無効化条件
  const isImageUploadDisabled = (imageField: keyof typeof imageProcessingStatus) => {
    // 処理中の場合のみ無効化
    if (isProcessingImage) {
      return true;
    }

    // 必要に応じて追加の制約を設定
    const images = [mainImage, subImage1, subImage2, subImage3];
    const currentIndex = imageFields.findIndex(field => field.fieldName === imageField);

    if (currentIndex === 0) return false;  // 最初の画像は常に追加可能

    // 前の画像が存在しない場合は無効化
    return !images[currentIndex - 1];
  };

  // タグ付き画像削除ハンドラー
  const handleOnRemoveImageWithTag = (
    field: ImageField,
    index: number
  ) => {
    // 画像とタグの配列を作成
    const images = [mainImage, subImage1, subImage2, subImage3];
    const imageSetters = [setMainImage, setSubImage1, setSubImage2, setSubImage3];
    const tagArrays = [mainTags, sub1Tags, sub2Tags, sub3Tags];
    const tagSetters = [setMainTags, setSub1Tags, setSub2Tags, setSub3Tags];
    const loadingSetters = [setMainLoading, setSub1Loading, setSub2Loading, setSub3Loading];
    const errorSetters = [setMainError, setSub1Error, setSub2Error, setSub3Error];
    const fieldNames = ['mainImage', 'subImage1', 'subImage2', 'subImage3'] as const;

    // 削除された位置以降の画像を前に詰める
    for (let i = index; i < images.length - 1; i++) {
      const nextImage = images[i + 1];

      if (nextImage) {
        // 状態の更新
        imageSetters[i](nextImage);
        tagSetters[i](tagArrays[i + 1]);

        try {
          // FileListオブジェクトを作成して設定
          const fileList = new DataTransfer();
          fileList.items.add(nextImage); // この時点で nextImage は null でないことが保証されている

          setValue(fieldNames[i], fileList.files);
        } catch (error) {
          console.error('Error updating form value:', error);
        }
      } else {
        // 状態のクリア
        imageSetters[i](null);
        tagSetters[i]([]);
        setValue(fieldNames[i], undefined);
      }

      loadingSetters[i](false);
      errorSetters[i](null);
    }

    // 最後の位置をクリア
    const lastIndex = images.length - 1;
    imageSetters[lastIndex](null);
    tagSetters[lastIndex]([]);
    loadingSetters[lastIndex](false);
    errorSetters[lastIndex](null);
    setValue(fieldNames[lastIndex], undefined);

    // 画像処理状態を更新
    setImageProcessingStatus(prev => {
      const newStatus = { ...prev };
      for (let i = index; i < Object.keys(newStatus).length; i++) {
        const key = `${i === 0 ? 'mainImage' : `subImage${i}`}` as keyof typeof imageProcessingStatus;
        newStatus[key] = i < images.length - 1 ? !!images[i + 1] : false;
      }
      return newStatus;
    });

    // コンテキストの更新
    const updateContext = async () => {
      const currentFormData = getValues();
      const remainingImages = images
        .filter((img): img is File => img !== null) // null でないことが保証されている
        .map((img, index) => ({
          imageUrl: URL.createObjectURL(img),
          tags: [mainTags, sub1Tags, sub2Tags, sub3Tags][index],
          imageType: index * 10  // インデックスに基づいて imageType を設定 (0, 10, 20, 30)
        }));

      // 既存のコンテキストデータから API 関連のフィールドを取得
      const existingData = unknownItemData ?? {
        tenNm: "",
        sisyaCd: "",
        sisyaNm: "",
        foundBy: "",
        entryBy: "",
      };

      const updatedData: UnknownItemData = {
        foundDate: currentFormData.foundDate,
        tenCd: currentFormData.tenCd || "",
        tenNm: existingData.tenNm || "", // 既存のデータを保持
        sisyaCd: existingData.sisyaCd || "", // 既存のデータを保持
        sisyaNm: existingData.sisyaNm || "", // 既存のデータを保持
        foundBy: existingData.foundBy || "", // 既存のデータを保持
        entryBy: existingData.entryBy || "", // 既存のデータを保持
        foundPlace: currentFormData.foundPlace || "",
        foundById: currentFormData.foundById || "",
        entryById: currentFormData.entryById || "",
        images: remainingImages,
        hasExpiryDate: currentFormData.hasExpiryDate,
        expiryDate: currentFormData.hasExpiryDate === true ? currentFormData.expiryDate : new Date(),
        comments: currentFormData.comments || "",
        entryDate: new Date()
      };

      // コンテキストを更新
      setUnknownItemData(updatedData);
    };

    // コンテキスト更新の実行とエラーハンドリング
    updateContext().catch(error => {
      console.error('コンテキストの更新中にエラーが発生しました:', error);
      showError('画像の削除中にエラーが発生しました');
    });
  };

  const onSubmit = handleSubmit(async (data) => {
    // 手動送信でない場合は処理を中断
    if (!isManualSubmit) return;

    //console.log('Form submission started with data:', data); // 送信開始時のデータ

    // 画像の枚数チェック
    const validImages = [mainImage, subImage1, subImage2, subImage3].filter(img => img !== null);
    //console.log('Valid images:', validImages.length); // 有効な画像の数
    if (validImages.length < 2) {
      showError('少なくとも2枚の画像をアップロードしてください');
      setRegisterBtnLoading(false);
      setIsManualSubmit(false);
      return;
    }

    setRegisterBtnLoading(true);

    try {
      // API呼び出しの前のログ
      // console.log('Fetching common info for:', {
      //   tenCd: data.tenCd,
      //   foundById: data.foundById,
      //   entryById: data.entryById,
      // });
      const commonInfo = await fetchCommonInfo(
        data.tenCd,
        data.foundById,
        data.entryById);

      //console.log('Received common info:', commonInfo); // API レスポンスの確認

      //console.log('validateCommonInfo(commonInfo):', validateCommonInfo(commonInfo));
      //alert("レスポンスデータ" + JSON.stringify(commonInfo, null, 2));
      //alert("マスター値のバリデーション結果：" + JSON.stringify(validateCommonInfo(commonInfo), null, 2));

      // 新しいバリデーション処理
      const validation = validateCommonInfo(commonInfo);

      // // マスター値のバリデーション
      // if (!validation.isValid) {
      //   const errorMessage = `正しい${validation.errors.join('、')}\nを入力してください！`;
      //   setValidationError(errorMessage);
      //   showError(errorMessage);
      //   setRegisterBtnLoading(false);
      //   setIsManualSubmit(false);
      //   return;
      // }
      if (!validateCommonInfo(commonInfo)) {
        const errorMessage = '発見店コード、発見者もしくは入力者を再度ご確認してください!';
        setValidationError(errorMessage);
        showError(errorMessage);
        setRegisterBtnLoading(false);
        setIsManualSubmit(false);
        return;
      }

      // バリデーション成功時にエラーをクリア
      setValidationError(null);

      // 画像データを Base64 に変換
      const imageData = await Promise.all(
        imageFields
          .filter(field => field.state !== null) // null の画像フィールドを除外
          .map(async (field, index): Promise<{ imageUrl: string; tags: string[]; imageType: number }> => {
            const base64 = await convertToBase64(field.state!); // field.state は null でないことが保証されている
            return {
              imageUrl: base64,
              tags: field.tags,
              imageType: index * 10  // 0, 10, 20, 30 based on index
            };
          })
      );

      //console.log('Processed image data:', imageData); // 画像データの確認
      // データを加工
      const formattedData: UnknownItemData = {
        tenNm: commonInfo.tenNm,//発見店名 マスタAPIから
        sisyaCd: commonInfo.sisyaCd,//支社コード　マスタAPIから
        sisyaNm: commonInfo.sisyaNm,//　マスタAPIから
        foundBy: commonInfo.foundBy,//発見者社員氏名　マスタAPIから
        entryBy: commonInfo.entryBy,//入力者社員氏名　マスタAPIから
        // foundDate:formatDate(data.foundDate),
        foundDate: data.foundDate,
        tenCd: data.tenCd || "",// デフォルト値として空文字列を設定
        foundPlace: data.foundPlace || "",
        foundById: data.foundById,
        entryById: data.entryById || "",
        // images: filteredImageData,
        images: imageData,// この時点で imageData は null を含まない配列
        hasExpiryDate: data.hasExpiryDate,
        expiryDate: data.hasExpiryDate ? data.expiryDate : null,
        // expiryDate: data.hasExpiryDate ? formatDate(data.expiryDate) : "",
        comments: data.comments || "",
        entryDate: new Date()
      };

      //console.log('Formatted data before context update:', JSON.stringify(formattedData)); // コンテキスト更新前のデータ

      // Context を更新
      setUnknownItemData(formattedData);

      // // データをローカルストレージに保存（仮の実装）
      // localStorage.setItem('unknownItemData', JSON.stringify(formattedData));
      // useEffect を追加してコンテキストの更新を監視

      // Navigation の前にもう一度ログを出力
      //console.log('About to navigate with data:', JSON.stringify(formattedData));

      // 確認ページへ遷移
      router.push('/unknown-item-register/confirmation');
    } catch (error) {
      console.error('フォームの送信中にエラーが発生しました。:', error);
      showError('フォームの送信中にエラーが発生しました。しばらく時間を置いてお試しください');
    } finally {
      setRegisterBtnLoading(false);
      setIsManualSubmit(false); // フラグをリセット
    }
  });

  // 登録ボタンクリックハンドラーの追加
  const handleRegisterClick = () => {
    setIsManualSubmit(true);
    onSubmit();
  };

  // タグフィールドアイテム
  const tagFieldItem = (tags: string[], setTags: (tags: string[]) => void) => tags.map((tag, index) =>
    <div key={index} className="w-full">
      {/* <Label className="mb-2 text-sm text-muted-foreground">{`タグ${index + 1}`}</Label> */}
      <div className="relative">
        <Input
          value={tag}
          onChange={(e) => {
            const newTags = [...tags];
            newTags[index] = e.target.value;
            setTags(newTags);
          }}
          // className="pl-8 rounded-full h-8"
          className="px-4 rounded-full h-9 text-xs" // 右側にもパディングを追加
          type="text" />
        <Tag className="absolute left-1 top-1/2 transform -translate-y-1/2" size={10} />
        <CircleX
          className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
          size={19}
          onClick={() => {
            const newTags = tags.filter((_, i) => i !== index);
            setTags(newTags);
          }}
        />
      </div>
      {(errors.tags !== undefined && errors.tags[index]?.tag?.message) && <p className="mt-0.5 text-xs text-red-400">{errors.tags[index]?.tag?.message}</p>}
    </div>
  );

  return (
    <form onSubmit={onSubmit} className="h-full w-full flex flex-col  gap-2 overflow-y-auto p-1">
      <div className="ml-auto">
        <p className="text-red-400 text-xs">*は必須項目です。</p>
      </div>

      {/* 不明品発見情報 */}
      <div className="bg-blue-50 p-2 rounded-lg shadow border-2">
        <h2 className="text-base font-semibold mb-1 text-blue-800">不明品発見情報</h2>
        <div className="flex flex-col gap-2">

          {/* 発見日 */}
          <div className="flex items-center justify-between">
            <Label htmlFor="foundDate" className="flex-shrink-0 mr-2 font-bold">発見日
              <span className="text-red-400">*</span></Label>
            <div className="w-7/12 ">
              <Controller
                control={control}
                name="foundDate"
                rules={{ required: true }}
                render={({ field, formState: { errors } }) => (
                  <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja} dateFormats={{ monthAndYear: "yyyy年 MM月", monthShort: "MM月" }}
                    localeText={{ okButtonLabel: "OK", cancelButtonLabel: "キャンセル", datePickerToolbarTitle: "不明品発見日" }}>
                    <MobileDatePicker
                      {...field}
                      value={field.value || ''}
                      // minDate={new Date()}
                      // sx={
                      //   dateTimePickerStyle
                      // }
                      sx={{
                        width: '100%',
                        "& .MuiOutlinedInput-root": {
                          height: "2.5rem", fontSize: "0.875rem", borderRadius: "0.375rem",
                          borderColor: "hsl(var(--input))",
                          backgroundColor: "rgb(255 255 255)",
                        },
                        '& .MuiInputBase-input': {
                          textAlign: 'left',//左揃えテキスト
                          padding: '1rem',
                        },
                      }}
                      // format="yyyy年MM月dd日"
                      slotProps={
                        {
                          toolbar: {
                            hidden: false,
                            toolbarFormat: "yyyy/MM/dd",
                            toolbarPlaceholder: "----年--月--日",
                          },
                        }
                      }
                    />
                  </LocalizationProvider>
                )}
              />
            </div>
          </div>
          {errors.foundDate?.message && <span className="mt-0.5 text-xs text-red-400">{errors.foundDate.message}</span>}

          {/* 発見店コード */}
          <div className="flex items-center justify-between">
            <Label htmlFor="tenCd" className="flex-shrink-0 mr-2 font-bold">発見店コード
              <span className="text-red-400">*</span></Label>
            <Input type="string" id="tenCd" placeholder="店コード(4桁)" {...register("tenCd")}
              className={"w-7/12 text-left border-gray-300 bg-white rounded-md shadow-sm placeholder-xxs placeholder-extra-thin-gray"}
            // className={`w-7/12 text-left border-gray-300 bg-white rounded-md shadow-sm placeholder-xxs placeholder-extra-thin-gray ${
            //   validationError ? 'border-red-400' : ''
            // }`} 
            />
          </div>
          {errors.tenCd?.message && <span className="mt-0.5 text-xs text-red-400">{errors.tenCd.message}</span>}

          {/* 発見場所 */}
          <div className="flex items-center justify-between">
            <Label htmlFor="foundPlace" className="flex-shrink-0 mr-2 font-bold">発見場所
            </Label>
            <TextareaAutoSized id="foundPlace" placeholder="例：トラック内 " {...register("foundPlace")} className="w-7/12 text-left border-gray-300 bg-white rounded-md shadow-sm" />
          </div>
          {errors.foundPlace?.message && <span className="mt-0.5 text-xs text-red-400">{errors.foundPlace.message}</span>}

          {/* 発見者 */}
          <div className="flex items-center justify-between">
            <Label htmlFor="foundById" className="flex-shrink-0 mr-2 font-bold">発見者
              <span className="text-red-400">*</span></Label>
            <Input type="string" id="foundById" placeholder="社員番号(7桁)" {...register("foundById")}
              className="w-7/12 text-left border-gray-300 bg-white rounded-md shadow-sm placeholder-xxs placeholder-extra-thin-gray "
            />
          </div>
          {errors.foundById?.message && <span className="mt-0.5 text-xs text-red-400">{errors.foundById.message}</span>}

          {/* 入力担当者 */}
          <div className="flex items-center justify-between">
            <Label htmlFor="entryById" className="flex-shrink-0 mr-2 font-bold">入力者
              <span className="text-red-400">*</span></Label>
            <Input type="string" id="entryById" placeholder="社員番号(7桁)" {...register("entryById")}
              className="w-7/12 text-left border-gray-300 bg-white rounded-md shadow-sm placeholder-xxs placeholder-exra-thin-gray"
            />
          </div>
          {errors.entryById?.message && <span className="mt-0.5 text-xs  text-red-400">{errors.entryById.message}</span>}
        </div>
      </div>


      {/* 不明品画像情報1 */}
      <div className="bg-blue-50 p-2 rounded-lg shadow border-2">
        <h2 className="text-base font-semibold mb-1 text-blue-800">不明品画像情報</h2>
        <div className="flex flex-col gap-2">
          {imageFields.map((field, index) => (
            <div key={index}>
              <div className={field.state !== null ? "flex flex-col" : "flex items-center justify-between"}>
                  <Label className={field.state !== null ? "mb-2 font-bold" : "flex-shrink-0 mr-2 font-bold"}>
                    {field.label} {field.required && <span className="text-red-400">*</span>}
                  </Label>
                  <div className={field.state !== null ? "w-full" : "w-7/12"}>
                    <div className="rounded-lg border p-2 bg-white ">
                      {field.loading && <p className="text-sm text-center text-blue-900 font-semibold">AIタグ自動生成中...</p>}
                      {field.error && <p className="text-sm text-center text-red-400">{field.error}</p>}
                      {!field.loading && (
                        <>
                          {field.state !== null ? (
                            <div className="relative">
                              <img
                                className="px-3 pt-3 w-96 object-contain"
                                src={URL.createObjectURL(field.state)}
                                alt={`Image ${index + 1}`}
                              />
                              <div className="p-3 flex flex-col gap-1">
                                {tagFieldItem(field.tags, field.setTags)}
                                <div className="flex justify-center">
                                  <Button
                                    className="h-6 px-4 py-2 rounded-full"
                                    component="label"
                                    role={undefined}
                                    variant="contained"
                                    tabIndex={-1}
                                    startIcon={<CirclePlus size={16} />}
                                    onClick={() => field.setTags([...field.tags, ''])}
                                  >
                                    <p className="text-xs">タグ追加</p>
                                    {/* タグ追加 */}
                                  </Button>
                                </div>
                              </div>
                              <MyButton
                                className="h-fit w-fit z-10 absolute top-0 right-0"
                                variant={"ghost"}
                                size={"icon"}
                                onClick={() => handleOnRemoveImageWithTag(field, index)}
                              >
                                <CircleX size={22} className="text-gray-400" />
                              </MyButton>
                            </div>
                          )
                            : (
                              <div className="flex justify-center ">
                                <Button className="h-6"
                                  component="label"
                                  role={undefined}
                                  variant="contained"
                                  tabIndex={-1}
                                  startIcon={<Camera size={20} />}
                                  //isImageUploadDisabled 関数の結果に基づいて制御
                                  disabled={isImageUploadDisabled(field.fieldName as keyof typeof imageProcessingStatus)}
                                >
                                  写真撮影
                                  <VisuallyHiddenInput
                                    //画像処理が完了したときに対応する imageProcessingStatus を更新するように
                                    {...register(field.fieldName, {
                                      onChange: (e) => handleOnAddImageWithTag(
                                        e.target.files[0],
                                        field.setter,
                                        field.setLoading,
                                        field.setError,
                                        field.setTags,
                                        field.fieldName as keyof typeof imageProcessingStatus
                                      )
                                    })} type="file" accept='image/*' capture="user" />
                                </Button>

                              </div>
                            )}
                        </>
                      )}
                    </div>
                  </div>
              </div>
              {errors[field.fieldName]?.message && <p className="mt-0.5 text-xs text-red-400">{errors[field.fieldName]?.message}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* 不明品商品情報 */}
      <div className="bg-blue-50 p-2 rounded-lg shadow border-2">
        <h2 className="text-base font-semibold mb-1 text-blue-800">不明品商品情報</h2>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="hasExpiryDate" className="flex-shrink-0 mr-2 font-bold">賞味期限の有無
            </Label>
            <div className="w-7/12 text-left">
              <Controller
                name="hasExpiryDate"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={value}
                          onChange={handleCheckboxChange("hasExpiryDate", onChange)}
                        />}
                      label={<span className="text-sm">あり</span>}
                    />
                  </FormGroup>
                )}
              />
              {watchHasExpiryDate && (
                <div className="flex-grow">
                  <Controller
                    control={control}
                    name="expiryDate"
                    rules={{ required: true }}
                    render={({ field,
                      formState: { errors } }
                    ) => (
                      <LocalizationProvider
                        dateAdapter={AdapterDateFns}
                        adapterLocale={ja}
                        dateFormats={{ monthAndYear: "yyyy年 MM月", monthShort: "MM月" }}
                        localeText={{ okButtonLabel: "OK", cancelButtonLabel: "キャンセル", datePickerToolbarTitle: "賞味期限" }}>
                        <MobileDatePicker
                          {...field}
                          value={field.value}
                          sx={{
                            width: '100%',
                            "& .MuiOutlinedInput-root": {
                              height: "2.5rem",
                              fontSize: "0.875rem",
                              borderRadius: "0.375rem",
                              borderColor: errors.expiryDate ? "rgb(220, 38, 38)" : "hsl(var(--input))",
                              backgroundColor: "rgb(255 255 255)",
                              "&:hover": {
                                borderColor: errors.expiryDate ? "rgb(220, 38, 38)" : undefined,
                              },
                              "&.Mui-focused": {
                                borderColor: errors.expiryDate ? "rgb(220, 38, 38)" : undefined,
                              },
                            },
                            '& .MuiInputBase-input': {
                              textAlign: 'left',
                              padding: '0.5rem',
                              "&::placeholder": {
                                opacity: 1,
                                color: 'rgba(0, 0, 0, 0.6)',
                                fontWeight: 400,
                              },
                            },
                          }}
                          slotProps={{
                            textField: {
                              placeholder: "日付を選んでください",
                              error: !!errors.expiryDate,
                            },
                            // ツールバー設定
                            toolbar: {
                              hidden: false,
                              toolbarFormat: "yyyy/MM/dd",
                              toolbarPlaceholder: "----年--月--日",
                            },
                          }}
                        />
                      </LocalizationProvider>
                    )}
                  />
                </div>
              )}
            </div>
          </div>
          {errors.hasExpiryDate && <p className="text-red-500 text-xs">{errors.hasExpiryDate.message}</p>}
          {errors.expiryDate && <p className="text-red-500 text-xs">{errors.expiryDate.message}</p>}

          <div className="flex items-center justify-between">
            <Label htmlFor="comments" className="flex-shrink-0 mr-2 font-bold">フリー入力</Label>
            <TextareaAutoSized id="comments" {...register("comments")} className=" mt-1 block w-7/12  border-gray-300 bg-white rounded-md shadow-sm" />
          </div>
          {errors.comments?.message && <span className="mt-0.5 text-xs text-red-400">{errors.comments.message}</span>}
        </div>
      </div>

      <div className="px-4">
        <LoadingButton
          // onSubmit={onSubmit}  
          onClick={handleRegisterClick}  // onSubmit を handleRegisterClick に変更
          type="submit"
          loading={registerBtnLoading} variant="contained"
          loadingIndicator={<CircularProgress sx={{ color: "#E5E4E2", }} size={16} />}
          style={{ backgroundColor: "hsl(var(--primary))", borderRadius: 9999, width: "100%", }}>
          <span className="font-bold">登録内容を確認するへ</span>
        </LoadingButton>
      </div>
    </form>
  );
};

// src/features/unknown-item-register/unknown-item-confirmation.tsx
"use client"

import { FC, useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircularProgress } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import Link from "next/link";
import { useGlobalMessageContext } from "../global-message/global-message-context";
import { TextareaAutoSized } from "@/features/ai-summary/textarea-autosized"
import RegisterResultDialog from "@/features/unknown-item-register/register-result-dialog"
import { useUnknownItem, UnknownItemData } from "@/features/unknown-item-register/unknown-item-context";
import { registerUnknownItem } from "@/features/unknown-item-register/unknown-item-register-services/unknown-item-register-services";



export const UnknownItemConfirmation: FC = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
   
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const { unknownItemData, setUnknownItemData, shouldResetForm, setShouldResetForm } = useUnknownItem();
    const { showError } = useGlobalMessageContext();
    
//データがない場合の表示
if (!unknownItemData) {
    return <div className="flex justify-center items-center h-full">
        <CircularProgress />
        <span className="ml-2">データを読み込み中...</span>
    </div>;
}

    const handleConfirm = async () => {
        if (!unknownItemData) {
            showError('登録データが見つかりません');
            return;
        }
        //alert(JSON.stringify(data, null, 2));
        setLoading(true);
        try {
            // API呼び出しをシミュレート
             // APIリクエスト用のデータを整形
             const requestData = {
                foundDate: format(unknownItemData.foundDate, 'yyyy-MM-dd'),
                tenCd: unknownItemData.tenCd,
                tenNm: unknownItemData.tenNm,
                sisyaCd: unknownItemData.sisyaCd,
                sisyaNm: unknownItemData.sisyaNm,
                foundPlace: unknownItemData. foundPlace,
                foundById: unknownItemData.foundById,
                foundBy: unknownItemData.foundBy,
                entryById: unknownItemData.entryById,
                entryBy: unknownItemData.entryBy,
                images: unknownItemData.images,
                hasExpiryDate: unknownItemData.hasExpiryDate,
                expiryDate: unknownItemData.hasExpiryDate === true 
                    ? format(unknownItemData.expiryDate!, 'yyyy-MM-dd')
                    : "",
                comments: unknownItemData.comments,
                entryDate: format(unknownItemData.entryDate, 'yyyy-MM-dd'),
            };
            //console.log('request data:', JSON.stringify(requestData));

            // 登録APIを呼び出し
            const response = await registerUnknownItem(requestData);
                        
            // ステータスコード 200 の場合のみここに到達
            //console.log('Registration successful:', response);

            // await new Promise(resolve => setTimeout(resolve, 1000));

            // 登録成功をシミュレート
            setRegistrationSuccess(true);

            //登録失敗をシミュレート
            // setRegistrationSuccess(false);

            // 登録成功後、ローカルストレージのデータをクリア
            localStorage.removeItem('unknownItemData');

            // コンテキストをクリア
            // setUnknownItemData(null);
            
            // フォームリセットフラグを設定
            setShouldResetForm(true);

        } catch (error) {
            // 登録失敗をシミュレート
            console.error('Registration failed:', error);
            setRegistrationSuccess(false);
            // showError(error instanceof Error ? error.message : '登録に失敗しました');
        } finally {
            setLoading(false);
            setShowSuccessDialog(true);// ローディング完了後にダイアログを表示
            setTimeout(() => {
                router.push('/unknown-item-register');
            }, 100000);
        }
    }
    
    const handleCloseSuccessDialog = () => {
        setShowSuccessDialog(false);
        // router.push("/unknown-item-register");
        if (registrationSuccess) {
            router.push("/unknown-item-register");
        }
    };

    const handleContinueRegistration = () => {
   // Context をクリア
    setUnknownItemData(null);
    // フォームリセットフラグを設定
    setShouldResetForm(true);
    setShowSuccessDialog(false);
    router.push("/unknown-item-register");
    };

    const handleRetryRegistration = () => { 
         setShowSuccessDialog(false);
         router.push("/unknown-item-register");
         };

        //  if (!unknownItemData) {
        //     return <div>Loading...</div>;
        //  }

    return (
        <>
            <form className="h-full w-full flex flex-col gap-2 p-1">
                <div className="">
                    <p className="text-red-400 text-lg font-bold text-center">登録内容をご確認ください。</p>
                </div>

                {/* 不明品発見情報 */}
                <div className="bg-blue-50 p-2 rounded-lg shadow border-2">
                    <h2 className="text-lg font-semibold mb-1 text-blue-800">不明品発見情報</h2>
                    <div className="flex flex-col gap-2">
                        <ConfirmationField label="発見日" value={unknownItemData?.foundDate} />
                        <ConfirmationField label="発見店" value={`${unknownItemData?.tenCd} ${unknownItemData.tenNm}`}/>
                        <ConfirmationField label="支社" value={`${unknownItemData.sisyaCd} ${unknownItemData.sisyaNm}`} />
                        <div className="flex items-center justify-between">
                            <Label className="flex-shrink-0 mr-2 font-semibold">発見場所</Label>
                            <TextareaAutoSized value={unknownItemData. foundPlace} readOnly className="w-7/12 text-left border-gray-300 bg-transparent rounded-md shadow-sm focus-visible:ring-0 focus-visible:ring-offset-0" />
                        </div>
                        <ConfirmationField label="発見者" value={`${unknownItemData.foundById} ${unknownItemData.foundBy}`} />
                        <ConfirmationField label="入力日" value={unknownItemData.entryDate} />
                        <ConfirmationField label="入力者" value={`${unknownItemData.entryById} ${unknownItemData.entryBy}`} />
                    </div>
                </div>

                {/* 不明品画像情報 */}
                <div className="bg-blue-50 p-2 rounded-lg shadow border-2">
                    <h2 className="text-lg font-semibold mb-1 text-blue-800">不明品画像情報</h2>
                    <div className="flex flex-col gap-2">
                        {unknownItemData.images && unknownItemData.images.length > 0 ?
                            (unknownItemData.images.map((image, index) => (
                                <div key={index} className="flex flex-col gap-2">
                                    <Label className="font-semibold">画像{index + 1}</Label>
                                    <img src={image.imageUrl} alt={`画像${index + 1}`} className="w-full h-40 object-cover" />
                                    <div className="flex flex-wrap gap-2">
                                        {image.tags && image.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))
                            ) : (<p>画像情報がありません</p>)}
                    </div>
                </div>

                {/* 不明品商品情報 */}
                <div className="bg-blue-50 p-2 rounded-lg shadow border-2">
                    <h2 className="text-lg font-semibold mb-1 text-blue-800">不明品商品情報</h2>
                    <div className="flex flex-col gap-2">
                        <ConfirmationField
                            label="賞味期限"
                            value={unknownItemData.hasExpiryDate === true ? unknownItemData.expiryDate || "" : "なし"}
                        />
                        <div className="flex items-center justify-between">
                            <Label className="flex-shrink-0 mr-2 font-semibold ">フリー入力</Label>
                            <TextareaAutoSized value={unknownItemData.comments.length > 0 ? unknownItemData.comments: "なし"} readOnly 
                            className="w-7/12 text-left border-gray-300 bg-transparent rounded-md shadow-sm focus-visible:ring-0 focus-visible:ring-offset-0" />
                        </div>
                    </div>
                </div>

                <div className="px-4 flex flex-col gap-5">
                    <LoadingButton
                        onClick={handleConfirm}
                        loading={loading}
                        variant="contained"
                        loadingIndicator={<CircularProgress sx={{ color: "#E5E4E2" }} size={16} />}
                        style={{ backgroundColor: "hsl(var(--primary))", borderRadius: 9999, width: "100%" }}
                        // disabled={loading || !unknownItemData}
                        disabled={loading}
                    >
                        {/* <span className="font-bold text-lg">登録確定</span> */}
                        <span className="font-bold text-lg">{loading ? '登録中...' : '登録確定'}</span>
                    </LoadingButton>


                    <Link href={`/unknown-item-register`}>
                        <Button
                            // onClick={handleBack}
                            variant="outline"
                            style={{
                                backgroundColor: "white", color: "hsl(var(--primary))", borderColor: "hsl(var(--primary))",
                                borderRadius: 9999, width: "100%"
                            }}
                            disabled={loading}
                        >
                            <span>戻って修正する</span>
                        </Button>
                    </Link>
                </div>
            </form>

            {showSuccessDialog && (
                <RegisterResultDialog
                    onClose={handleCloseSuccessDialog}
                    onContinue={handleContinueRegistration}
                    success={registrationSuccess}
                    onContinueByRetry={handleRetryRegistration}
                />
            )}
        </>
    );
};


// const ConfirmationField: FC<{ label: string; value: string }> = ({ label, value }) => (
//     <div className="flex items-center justify-between">
//         <Label className="flex-shrink-0 mr-2 font-semibold">{label}</Label>
//         <Input value={value} readOnly className="w-7/12 border-gray-300 rounded-md shadow-sm bg-transparent text-left" />
//     </div>
// );


const ConfirmationField: FC<{ label: string; value: string | Date | null }> = ({ label, value }) => {
    let displayValue: string;

    if (value instanceof Date) {
        displayValue = format(value, "yyyy/MM/dd");
    } else if (value === null) {
        displayValue = "";
    } else {
        displayValue = value;
    }

    return (
        <div className="flex items-center justify-between">
            <Label className="flex-shrink-0 mr-2 font-semibold">{label}</Label>
            <Input 
                value={displayValue} 
                readOnly 
                className="w-7/12 border-gray-300 rounded-md shadow-sm bg-transparent text-left focus-visible:ring-0 focus-visible:ring-offset-0 " 
            />
        </div>
    );
};


//src\features\unknown-item-register\register-result-dialog.tsx
import React from 'react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface RegisterResultDialogProps {
  onClose: () => void;
  onContinue: () => void;
  onContinueByRetry:() => void;
  success: boolean
  
}

const RegisterResultDialog: React.FC<RegisterResultDialogProps> = ({ onClose, onContinue, success,onContinueByRetry }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-96 rounded-lg shadow-lg p-6 relative">
        {/* <Button
          onClick={onClose}
          className="absolute top-2 right-2 bg-transparent text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </Button> */}
        <div className="flex flex-col items-center">
          {success ?
            (<CheckCircle size={48} className="text-green-500 mb-4" />) :
            (<AlertCircle size={48} className="text-red-500 mb-4" />
            )}
          {success ? (<p className="text-center font-semibold mb-6">
            登録が完了しました。
          </p>) :
            (<p className="text-center font-semibold mb-6 text-red-500">
              登録に失敗しました。
            </p>)}
          <div className="flex flex-col gap-2 w-full">
            {success ?
              (<Button
                onClick={onContinue}
                variant="default"
                style={{ backgroundColor: "hsl(var(--primary))", borderRadius: 9999, width: "100%" }}
              >
                <span className="font-bold">引続登録する</span>
              </Button>) :
              (<Button
                onClick={onContinueByRetry}
                variant="default"
                style={{ backgroundColor: "hsl(var(--primary))", borderRadius: 9999, width: "100%" }}
              >
                <span className="font-bold">再度登録する</span>
              </Button>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterResultDialog;

//src\features\unknown-item-register\unknown-item-context.tsx
"use client"
import React, { createContext, useContext, useState, ReactNode,useEffect } from 'react';

// UnknownItemData の型定義を修正
export type UnknownItemData = {
  tenNm: string;//発見店名 マスタAPIから
  sisyaCd: string;//支社コード　マスタAPIから
  sisyaNm: string;//　マスタAPIから
  foundBy:string;//発見者社員氏名　マスタAPIから
  entryBy: string;//入力者社員氏名　マスタAPIから
  foundDate: Date;//発見日
  tenCd: string;//発見店コード
  foundPlace: string;//発見場所
  foundById: string;//発見者コード
  entryById: string;//入力者コード
  images: {
    imageUrl: string;
    tags: string[];
    imageType: number;
  }[];
  hasExpiryDate: boolean;
  expiryDate: Date | null;
  comments: string;
  entryDate: Date;
} | null;  // null を許容するように修正

type UnknownItemContextType = {
  unknownItemData: UnknownItemData;
  setUnknownItemData: React.Dispatch<React.SetStateAction<UnknownItemData>>;
  // setUnknownItemData:(data:UnknownItemData) => void;
  shouldResetForm: boolean;  
  setShouldResetForm: (should: boolean) => void;  
};

const UnknownItemContext = createContext<UnknownItemContextType | undefined>(undefined);

export const UnknownItemProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [unknownItemData, setUnknownItemData] = useState<UnknownItemData>(null);  // 初期値を null に設定
  const [shouldResetForm, setShouldResetForm] = useState(false); 

  //状態変更をログ出力
  // useEffect(() => {
  //   if (unknownItemData !== null) {
  //     console.log('Unknown item data updated:', unknownItemData);
  //   }
  // }, [unknownItemData]);


  return (
    <UnknownItemContext.Provider value={{
      unknownItemData,
      setUnknownItemData,
      shouldResetForm, 
      setShouldResetForm
      }}>
      {children}
    </UnknownItemContext.Provider>
  );
};

export const useUnknownItem = (): UnknownItemContextType=> {
  const context = useContext(UnknownItemContext);
  if (context === undefined) {
    throw new Error('useUnknownItem must be used within a UnknownItemProvider');
  }
  return context;
};

//src\features\unknown-item-register\unknown-item-register-services\unknown-item-register-services.ts
import { styled } from '@mui/material/styles';

// API レスポンスの型定義
export type RegisterResponse = {
  message: string;
};

export type RegisterError = {
  error: string;
};

// 登録 API を呼び出す関数
//レスポンスが空であることを前提としている
export const registerUnknownItem = async (data: any): Promise<RegisterResponse> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_UNKNOWN_ITEM_LOGIC_URL}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // ステータスコードのみで成功/失敗を判定
    if (response.status === 200) {
      return { message: 'Registration successful' };
    } else {
      // エラーの場合
      throw new Error(`Registration failed with status: ${response.status}`);
    }

  } catch (error) {
    console.error('Error registering unknown item:', error);
    throw error;
  }
};


export type CommonInfoResponse = {
  tenNm: string;
  sisyaCd: string;
  sisyaNm: string;
  foundBy: string;
  entryBy: string;
};

// Error type definition
export type APIError = {
  error: string;
};

//マスター値取得API（レスポンスコードに応じる）
export const fetchCommonInfo = async (
  tenCd: string,
  foundById: string,
  entryById: string
): Promise<CommonInfoResponse> => {
  try {
    const queryParams = new URLSearchParams({
      tenCd,
      foundById,
      entryById,
    }).toString();

    const response = await fetch(`${process.env.NEXT_PUBLIC_UNKNOWN_ITEM_LOGIC_URL}/api/commonInfo?${queryParams}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // レスポンスの内容を取得（エラーの場合もメッセージを取得するため）
    let responseData;
    try {
      responseData = await response.json();
    } catch (parseError) {
      throw new Error('レスポンスの解析に失敗しました');
    }

    // ステータスコードに応じた処理
    switch (response.status) {
      case 200:
        // 成功の場合
        return responseData as CommonInfoResponse;

      case 400:
        // バリデーションエラーなどのクライアントエラー
        throw new Error(
          `リクエストが不正です: ${responseData.error || '入力内容を確認してください'}`
        );

      case 404:
        // バリデーションエラーなどのクライアントエラー
        throw new Error(
          `サーバ接続エラーが発生しました: ${responseData.error || 'しばらく待ってから再度お試しください'}`
        );

      case 500:
        // サーバーエラー
        throw new Error(
          'サーバーでエラーが発生しました。しばらく待ってから再度お試しください'
        );

      default:
        // その他のエラー
        throw new Error(
          `予期せぬエラーが発生しました(${response.status}): ${responseData.error || '不明なエラー'
          }`
        );
    }
  } catch (error) {
    // エラーログの出力
    console.error('Error fetching common information:', error);

    // エラーを上位に伝播
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error('不明なエラーが発生しました');
    }
  }
};

//マスタ取得簡略API
export const fetchCommonInfo1 = async (
  tenCd: string,
  foundById: string,
  entryById: string
): Promise<CommonInfoResponse> => {
  try {
    const queryParams = new URLSearchParams({
      tenCd,
      foundById,
      entryById,
    }).toString();

    const response = await fetch(`${process.env.NEXT_PUBLIC_UNKNOWN_ITEM_LOGIC_URL}/api/commonInfo?${queryParams}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData: APIError = await response.json();
      throw new Error(errorData.error || 'Failed to fetch common information');
    }

    const data: CommonInfoResponse = await response.json();
    // alert("レスポンスデータ" + JSON.stringify(data, null, 2));
    return data;
  } catch (error) {
    console.error('Error fetching common information:', error);
    throw error;
  }
};

// マスター値のバリデーション関数
export const validateCommonInfo = (data: CommonInfoResponse): boolean => {
  const invalidValues = ['Not found', 'null', 'nullnull', 'undefined'];

  // デバッグ用のログ
  //console.log('Validating data:', data);

  const isValid = Object.values(data).every(value => {
    // 無効な値のいずれかが含まれていないかチェック
    const containsInvalidValue = invalidValues.some(invalid =>
      value.includes(invalid)
    );

    return value && //値が存在し（nullやundefinedでない）
      value.trim() !== '' && //空白を除去しても空文字列でなく
      !containsInvalidValue;  // 無効な値を含まない
  });

  //console.log('Validation result:', isValid);
  return isValid;
};

//入力エラーごとのメッセージ表示パータン
export const validateCommonInfo1 = (data: CommonInfoResponse): { isValid: boolean; errors: string[] } => {
  const invalidValues = ['Not found', 'null', 'nullnull', 'undefined'];
  const errors: string[] = [];

  // デバッグ用のログ
  //console.log('Validating data:', data);

  // 店コードのチェック
  if (!data.tenNm || data.tenNm.trim() === '' || invalidValues.some(invalid => data.tenNm.includes(invalid))) {
    errors.push('店コード');
  }

  // 支社コードのチェック
  if (!data.sisyaCd || data.sisyaCd.trim() === '' || invalidValues.some(invalid => data.sisyaCd.includes(invalid))) {
    // errors.push('支社コード');
  }

  // 支社名のチェック
  if (!data.sisyaNm || data.sisyaNm.trim() === '' || invalidValues.some(invalid => data.sisyaNm.includes(invalid))) {
    // errors.push('支社名');
  }

  // 発見者の社員番号
  if (!data.foundBy || data.foundBy.trim() === '' || invalidValues.some(invalid => data.foundBy.includes(invalid))) {
    errors.push('発見者の社員番号');
  }

  // 入力者の社員番号
  if (!data.entryBy || data.entryBy.trim() === '' || invalidValues.some(invalid => data.entryBy.includes(invalid))) {
    errors.push('入力者の社員番号');
  }

  // デバッグ用のログ
  //console.log('Validation errors:', errors);

  return {
    isValid: errors.length === 0,
    errors: errors
  };
};



#！注意事項：元のソースコードのコメントを削除しないでください。